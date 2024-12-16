import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AuthRouter = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/signin',{replace:true})
        }
    },[navigate])
  return (
    <Outlet/>
  )
}

export default AuthRouter

