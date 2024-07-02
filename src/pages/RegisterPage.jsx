import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import {toast} from 'react-hot-toast'
import Otp from "../component/Otp"
import { registerAsync } from "../slice/slices"
import { useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
export default function RegisterPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const id = useSelector(state =>state?.counter?.userid)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
// const [userPhone ,setUserPhone] = useState()

const userid = (   useSelector(state =>state?.counter?.userid) )
const handleData = async (data)=>{
  
    if(data.name.length < 3 ){
       toast.error("Enter Your FullName")
       return false
    }
    if(data.restroname <3){
        toast.error("Enter Your Restruent Name")
        return false
    }
  
    
    console.log(data)
    // toast.success('OTP have been sent')
    // setUserPhone(data.phone)
    const res  = await dispatch(registerAsync(data))
    toast.success(res?.payload?.data?.message)
    // if(res?.payload?.data?.success){

    //   setTimeout(()=>{
       
    //     navigate(`/send-otp/${userid}`)
    //   } , 1000)

    return userid && navigate(`/send-otp/${userid}`) 

    } 
    useEffect(()=>{
      if(userid){
        navigate(`/send-otp/${userid}`)
      }
    } , [userid])
    

   
  
    
    


return (
      <>
     
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register Your Restruent
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form noValidate className="space-y-6"  onSubmit={handleSubmit(handleData)}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                 Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                   {...register('name' ,{ require:true})}
                    type="text"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register('email')}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="restroname" className="block text-sm font-medium leading-6 text-gray-900">
                Restrurent Name
                </label>
                <div className="mt-2">
                  <input
                    id="restroname"
                    {...register('restroname' ,{ require:true})}

                    type="text"
                    autoComplete="restroname"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
             
  
             
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Next
                </button>
              </div>
            </form>
           
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    )

}