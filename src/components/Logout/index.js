import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    let navigate = useNavigate()
    useEffect(()=>{
        localStorage.setItem("user","")
        navigate('/login')
    },[navigate])
    return null
}

export default Logout
