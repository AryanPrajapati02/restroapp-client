import React, { useEffect } from 'react'
import { getUserDataAsync } from '../slice/slices'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import RestroDashboardPage from './RestroDashboardPage'

function DashboardMiddleware() {
    const navigate = useNavigate()
    const isLoggedIn =  useSelector(state =>state?.counter?.isLoggedIn)
  
 useEffect(()=>{
    if(!isLoggedIn){
      navigate('/login')
    }
   
   
     
 } , [])
  return (
    <>
  {isLoggedIn ? <RestroDashboardPage /> : null}
    </>
  )
}

export default DashboardMiddleware