import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedPage = ({element}) => {
    if(localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData'))){
        return element
    }
  return <Navigate to='/auth/login' replace />
}

export default ProtectedPage