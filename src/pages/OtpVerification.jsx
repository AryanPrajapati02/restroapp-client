import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom';
// import { useDispatch } from "react-redux"
import toast from 'react-hot-toast';
import { sendOtpAsync, verifyOtpAsync } from '../slice/slices';

function OtpVerification() {
  // const defaultValues ={
    //   phone: "963852",
    //   opt: "",
    // }
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const phone = useSelector(state =>state?.counter?.phone)
    const {
        register,
        handleSubmit,
        
        watch,
        formState: { errors },
       
      } = useForm()
 
    console.log(id)
  

   
    const userid = useSelector(state =>state?.counter?.userid)

const handleData = async (data)=>{

    if(data.otp.length !== 6)  {
      toast.error("Enter Valid OTP of 6 digit")
      return false
    }  
    const formattedData =  {...data , phone:phone}
    const res  = dispatch(verifyOtpAsync(formattedData))
    if(res?.payload?.data?.success){

     
       
        navigate(`/`)
     
    } 
   


    }
const isverified = useSelector(state =>state?.counter?.isVerified)
useEffect(()=>{
   if(isverified){
     navigate(`/`)
 
   }
} , [isverified])



  return phone && (
    <>
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-xl font-bold text-center mb-4">Enter Phone Number For Verification Code</h1>
       
        <form noValidate onSubmit={handleSubmit(handleData)}>
     
        <div>
                  <label htmlFor="otp" className="block text-sm font-medium leading-6 text-gray-900">
                OTP
                  </label>
                  <div className="mt-2">
                    <input
                      id="otp"
                      {...register('otp' ,{ require:true})}
                     
                      type="number"
                      
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
         
          <button type="submit" className="bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700">
         Send OTP
          </button>
        </form>
      </div>
    </>
  );
}

export default OtpVerification
