export const PAYPAL_OPTIONS = {
    "client-id": "AR0L1jVLP_gPz_AUeMxSsXitN3Ims-tSYIZMavltemy6HSsZB-juwGyXC7-TaVpYswIwZIsyFtCIEjvt", 
    "currency": "USD",
    "data-sdk-integration-source":"integrationbuilder_sc",
    "intent": "capture",
    "vault": true,
}

// development sandbox
// "client-id": "AesauTt2FhQaes6uXAHNRbqzAnLxv-byTHijvJw9m9iRUfLoIba2JekH0_KaYGOGv6K7Pcp3OjgxMy55", 

// live Client Id = 'AR0L1jVLP_gPz_AUeMxSsXitN3Ims-tSYIZMavltemy6HSsZB-juwGyXC7-TaVpYswIwZIsyFtCIEjvt'
// Live Clien Secret = 'EEIY4z-hhJbRRyP5XndSGVf8Xhu_r7gYTeM46TOSGN6NbQbXOIHPwZ36kjbtR7O3Ex-d78sqhpVXA9mg'

// export const BACCARAT_LOCK_PAYPAL_RETURN_URL = "https://gamin01.netlify.app/project3";
// export const ROULETTE_LOCK_PAYPAL_RETURN_URL = "https://gamin01.netlify.app/project1/blackRed";
// export const SPIN_CYCLE_LOCK_PAYPAL_RETURN_URL = "https://gamin01.netlify.app/project4";


export const BACCARAT_LOCK_PAYPAL_RETURN_URL = "https://gamin01.netlify.app/project3";
export const ROULETTE_LOCK_PAYPAL_RETURN_URL = "https://gamin01.netlify.app/project1/blackRed";
export const SPIN_CYCLE_LOCK_PAYPAL_RETURN_URL = "https://gamin01.netlify.app/project4";

export const BACCARAT_PLANS = [
    // {
    //     title:"Trial",
    //     price: 10,
    //     duration:"30 Minutes",
    //     subFor:"baccarat",
    //     subType:"thirtyMinutes"
    // },
    {
        title:"Basic",
        price: 50,
        duration:"48 Hours",
        subFor:"baccarat",
        subType:"twoDays"
    },
    {
        title:"Premium",
        price: 500,
        duration:"Month",
        subFor:"baccarat",
        subType:"monthly"
    }
];


export const ROULETTE_PLANS = [
    // {
    //     title:"Trial",
    //     price: 5,
    //     duration:"30 Minutes",
    //     subFor:"roulette",
    //     subType:"thirtyMinutes"
    // },
    {
        title:"Basic",
        price: 24,
        duration:"48 Hours",
        subFor:"roulette",
        subType:"twoDays"
    },
    {
        title:"Premium",
        price: 300,
        duration:"Month",
        subFor:"roulette",
        subType:"monthly"
    }
];