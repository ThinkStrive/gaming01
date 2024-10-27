import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedPage = ({element}) => {
    if(sessionStorage.getItem('userData') && JSON.parse(sessionStorage.getItem('userData'))){
        return element
    }
  return <Navigate to='/auth/login' replace />
}

export default ProtectedPage