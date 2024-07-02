import React, { useEffect, useState } from 'react'
import RenderPage from './RenderPage'
import Home from './Home'
import axiosInstance from '../helper/axios'
import { redirect } from 'react-router-dom'

function Middleware() {
    const host = window.location.host
    const s = host.split('.')[0]
    const[menu , setMenu ] =useState(false)


    //  const regex = /^([a-zA-Z0-9-]+)\.localhost:5173$/

    //  const test  = regex.test(`${host}:5173`)

    async function fetchMenu(){
      try{

        const resto  = await axiosInstance.get(`/get/${s}`)
        if(resto?.data?.success){
  
          setMenu(resto?.data?.success)
        }
      }catch(e){

        console.log()
        if(e?.response?.data === "Menu not found"){
          setMenu(false)
        }
      }
      
    }
     console.log(menu)
useEffect(()=>{
  fetchMenu()


} , [])

  return (
    <>
    {menu ? <RenderPage /> : <Home />}
    
    </>
  )
}

export default Middleware