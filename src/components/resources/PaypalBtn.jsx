import React from 'react';
import { useToast } from './Toast';

const PayPalBtn = ({amount}) => {
    const showToast = useToast();
  const handlePayment = async () => {
    try {
      // Make an API call to the backend to initiate the payment
      const response = await fetch('https://rouletteadminbackend.vercel.app/payment/pay', {
      // const response = await fetch('http://localhost:7050/payment/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Include any necessary data here, such as the item being purchased
          items: [
            {
              name: 'Item',
              price: `${amount}`,
              currency: 'USD',
              quantity: 1,
            },
          ],
        }),
      });

      const data = await response.json();

      console.log('data', data)
      
      // Redirect to PayPal approval URL returned from the backend
      if (data && data.approvalUrl) {
        window.location.href = data.approvalUrl;
      }
    } catch (error) {
      console.error('Error initiating PayPal payment:', error);
    }
  };

  return (
    <button onClick={handlePayment}>
      Pay $ {amount}
    </button>
  );
};

export default PayPalBtn;
