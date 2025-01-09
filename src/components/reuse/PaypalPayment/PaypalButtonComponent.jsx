import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { CREATE_SUBSCRIPTION , APPROVE_SUBSCRIPTION , CHECK_SUBSCRIPTION_STATUS } from "../../api/ApiDetails";
import { enqueueSnackbar , closeSnackbar } from "notistack";
import "../../../Style/PaypalButtonComponent.css";

const PaypalButtonComponent = ({ subFor , subType , onPaymentSuccess , returnURL}) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const startPollingSubscriptionStatus = async (subscriptionID, userEmail, keyToast) => {
        const maxAttempts = 30;
        let attempts = 0;
    
        const poll = setInterval(async () => {
            try {
                const response = await axios.post(CHECK_SUBSCRIPTION_STATUS, {
                    subscriptionID,
                    userEmail,
                });
    
                const res = response?.data;
                console.log({ res });
    
                if (res?.status === 'ACTIVE') {
                    clearInterval(poll);
                    closeSnackbar(keyToast);
                    enqueueSnackbar("Payment is successful. Plan is activated...", { variant: 'success' });
                    if (onPaymentSuccess) {
                        onPaymentSuccess();
                    }
                } else if (attempts >= maxAttempts) {
                    clearInterval(poll);
                    closeSnackbar(keyToast);
                    enqueueSnackbar('Subscription activation is taking longer than expected. Please check your email for updates.', { variant: 'warning' });
                }
            } catch (err) {
                console.error("Error checking subscription status:", err);
                clearInterval(poll);
                closeSnackbar(keyToast);
                enqueueSnackbar('Error checking subscription status. Please try again later.', { variant: 'error' });
            }
    
            attempts++;
        }, 10000);
    };

    const handleCreateSubscription = async () => {
        try {
            setError(null);
            setIsLoading(true);

            const response = await axios.post( CREATE_SUBSCRIPTION , {
                subFor,
                subType,
                return_url: returnURL,
                cancel_url: returnURL,
            });

            if ( response.data ) {
                const { subscription_id } = response.data ;
                console.log(subscription_id);
                
                return subscription_id;
            } else {
                throw new Error("No subscription ID received from PayPal");
            }
        } catch (err) {
            enqueueSnackbar("Subscription creation failed. Please try again later.", { variant: 'error' });
            console.error("Subscription creation failed:", err);
            setError(err.response?.data?.message || err.message || "Failed to create subscription");
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    const handleApprove = async (data) => {
        setError(null);
        setIsLoading(true);
    
        const keyToast = enqueueSnackbar('processing payment. Please wait...', {
            variant: 'info',
            persist: true,
            action: (
                <div className='flex items-center'>
                    <div className='spinner'></div>
                </div>
            )
        });
    
        try {
            if (data.orderID) {
                const userData = JSON.parse(sessionStorage.getItem("userData"));
                const userEmail = userData?.userEmail;
    
                if (!userEmail) {
                    throw new Error("Logged-in user email not found in session storage");
                }
    
                const response = await axios.post(APPROVE_SUBSCRIPTION, {
                    subscriptionID: data.subscriptionID,
                    userEmail
                });
    
                const res = response?.data;
                console.log({ res });
    
                if (res?.subscription?.status === 'ACTIVE') {
                    closeSnackbar(keyToast);
                    enqueueSnackbar("Payment is successful. Plan is activated...", { variant: 'success' });
                    if (onPaymentSuccess) {
                        onPaymentSuccess();
                    }
                } else if (res?.subscription?.status === 'PENDING') {
                    startPollingSubscriptionStatus(data.subscriptionID, userEmail, keyToast);
                } else {
                    closeSnackbar(keyToast);
                    enqueueSnackbar('Subscription status is unknown. Please contact support.', { variant: 'warning' });
                }
            }
        } catch (err) {
            closeSnackbar(keyToast);
            enqueueSnackbar(err.response?.data?.message || "Subscription activation failed", { variant: 'error' });
            console.error("Subscription approval failed:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <PayPalButtons
                fundingSource={undefined} 
                style={{ shape: "pill", layout: "vertical", color: "gold" }}
                createSubscription={handleCreateSubscription}
                onApprove={handleApprove}
                onError={(err) => handleError(err)}
            />
            {error && <div role="alert" className="text-red-500">{error}</div>}
            {isLoading && <div>Processing...</div>}
        </div>
    );
};

export default PaypalButtonComponent;