import React, { useState } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { getDomainAsync } from '../slice/slices'

function DomainModel({close}) {
    const dispatch = useDispatch()
    const modelRef = useRef()
    const closeModel=(e)=>{
        if(modelRef.current === e.target)
         close()
    }
    const [domain , setDomain ]= useState({
        domain: ''
   
    })

    const handleDomain = (e)=>{

        e.preventDefault()
        setDomain({...domain, domain: e.target.value})
    
        const dataForm = new FormData()
    
         dataForm.append('domain' , domain.domain)
    }

const handleClick = (e)=>{
     if(!domain){
        return toast.error('choose your domain')
     }
     dispatch(getDomainAsync(domain))
     close()


}

    
    // const dispatch = useDispatch()
  return (
  <>

  <div ref={modelRef} className='inset-0 fixed  bg-black bg-opacity-30 backdrop-blur-sm' >
  <div className='mt-[20vh]'>
   <button className='font-bold text-2xl rounded-full w-10 h-10 bg-white absolute right-4' onClick={()=>close()}>X</button>
   <div className='bg-zinc-200 p-5 rounded-xl m-5'>
        <h1 className='text-xl text-black font-bold '>Get Your Domain</h1>
        <div >
        <input type="text" placeholder='Enter Your Domain' name='domain'  value={domain.domain} onChange={handleDomain} className='rounded-xl px-5 py-2 w-[80vw] mt-2 mb-2  '/>
        <button className='bg-yellow-400 rounded-xl px-4 py-2  font-bold' onClick={handleClick} >Get Domain</button>
        </div>
   </div>
  </div>
  </div>
  </>
  )
}

export default DomainModel