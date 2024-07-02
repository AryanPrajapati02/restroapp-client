import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom';
// import { useDispatch } from "react-redux"
import toast from 'react-hot-toast';

import { loginAsync } from '../slice/slices';

function LoginPage() {

  const isLoggedIn = useSelector(state =>state?.counter?.isLoggedIn)
  useEffect(()=>{
    if(isLoggedIn){
      navigate('/get/dashboard')
    }
  },[isLoggedIn])
  const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
 
 
  

   
  

const handleData = async (data)=>{
    const phoneRegex = /^(?!6666666666|7777777777|8888888888|9999999999|9874563210)([6-9]{1})([0-9]{9})$/
    if(!phoneRegex.test(data.phone)){
        toast.error("Enter Valid Phone Number")
        return false
    }

    const res =  dispatch(loginAsync(data))
    if(res?.payload?.data?.success){
      navigate(`/get/dashboard`)
      return 
      
      }

  


     
}




  return (
    <>
    {isLoggedIn ? navigate('/get/dashboard') : <>
      
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold text-center mb-4">Enter Phone Number For Verification Code</h1>
     
      <form noValidate onSubmit={handleSubmit(handleData)}>
      <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                 Phone 
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    {...register('phone' ,{ require:true})}

                    type="number"
                    autoComplete="phone"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
       
        <button type="submit" className="bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700">
       Login 
        </button>
      </form>
    </div>
      </>}
      </>
  );
}

export default LoginPage
