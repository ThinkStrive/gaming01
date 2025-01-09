import { useEffect } from "react";

export const usePlanExpiryCheck = ( subscriptionType , expiryDate , setPlanLockScreen = () => {} ) => {
    useEffect(()=>{
        if( subscriptionType === 'none' || !expiryDate ) return;

        const checkExpiry = () => {
            const currentTime = new Date();
            const expiryTime = new Date(expiryDate);

            if( currentTime > expiryTime ) {
                setPlanLockScreen(true);
            }
        }

        checkExpiry();

        const intervalID = setInterval(checkExpiry, 2000);

        return () => clearInterval(intervalID);
    },[ subscriptionType , expiryDate , setPlanLockScreen ]);
}