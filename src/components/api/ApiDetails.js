import { backendUrl } from "../../../config";

export const USER_LOGIN = `${backendUrl}/authentication/login`
export const USER_REGISTER = `${backendUrl}/authentication/register`
export const USER_EMAIL_VERIFY = `${backendUrl}/authentication/verifyEmail`
export const USER_FORGOT_PASSWORD = `${backendUrl}/authentication/forgotPassword`
export const USER_RESET_PASSWORD = `${backendUrl}/authentication/resetPassword`

export const USER_FEEDBACK = `${backendUrl}/feedback`

export const USER_DETAILS = `${backendUrl}/users`

export const GET_USER_NOTIFICATIONS = `${backendUrl}/notification/user/view`  
export const MARK_NOTIFICATION_AS_READ = `${backendUrl}/notification/user/mark-as-read`

// paypal 
export const CHECK_SUBSCRIPTION_STATUS = `${backendUrl}/paypal/check-subscription-status`
export const CREATE_SUBSCRIPTION = `${backendUrl}/paypal/create-subscription`
export const APPROVE_SUBSCRIPTION = `${backendUrl}/paypal/approve-subscription`