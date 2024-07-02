import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import axiosInstance from '../helper/axios'
import { redirect, useNavigate } from 'react-router-dom'
import Card from '../component/Card'
import RestroFooter from '../component/RestroFooter'
import { getUserDataAsync } from '../slice/slices'

import Skeleton from '../component/Skeleton'
import WaveComponent from '../component/WaveComponent'
import { useSelector } from 'react-redux'

 function RenderPage() {
    const navigate = useNavigate()

    
    const subdomain = window.location.host
   const s =  subdomain.split('.')[0]
   
//    const m =  subdomain.split('.')[1]


    const [menu , setMenu] = useState('')
    const [img , setImg] = useState([])
    const fetchMenu =async()=>{

        const resto  = await axiosInstance.get(`/get/${s}`)
        // console.log()
        setMenu(resto?.data?.success)
        setImg(resto?.data?.menu)
      

    }
  
    
    useEffect(()=>{
        fetchMenu()  
     

       
        
    } ,[])


    
  return (
  <>
  <div className='bg-white '>
   
      <div className='fixed w-full   ' >
        
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,100 C 33.57099017387408,124.93661095164144 67.14198034774816,149.87322190328288 114,148 C 160.85801965225184,146.12677809671712 221.00306878288143,117.44372333850994 267,106 C 312.9969312171186,94.55627666149006 344.8457445207262,100.35188474267734 390,105 C 435.1542554792738,109.64811525732266 493.6139531342136,113.14873769078072 542,115 C 590.3860468657864,116.85126230921928 628.6984429424192,117.05316449419978 669,98 C 709.3015570575808,78.94683550580022 751.5922750961096,40.638604332420186 790,57 C 828.4077249038904,73.36139566757981 862.9324566731419,144.39241817611946 904,145 C 945.0675433268581,145.60758182388054 992.6778982113228,75.79172296310199 1042,52 C 1091.3221017886772,28.208277036898004 1142.3559504815669,50.44068997147254 1185,61 C 1227.6440495184331,71.55931002852746 1261.8982998624094,70.44551715100785 1303,75 C 1344.1017001375906,79.55448284899215 1392.0508500687952,89.77724142449608 1440,100 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#fcb900" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,233 C 38.23343291088135,256.82603737434016 76.4668658217627,280.6520747486803 121,271 C 165.5331341782373,261.3479252513197 216.3659696238306,218.2177383796189 262,212 C 307.6340303761694,205.7822616203811 348.06925568291484,236.4769717328441 388,253 C 427.93074431708516,269.5230282671559 467.3570076445101,271.87437468900464 515,266 C 562.6429923554899,260.12562531099536 618.5027137390454,246.02552951113742 666,246 C 713.4972862609546,245.97447048886258 752.6321373993082,260.0235072664458 794,248 C 835.3678626006918,235.9764927335542 878.9687366637213,197.88044142307942 918,193 C 957.0312633362787,188.11955857692058 991.4929159458068,216.4547270412364 1040,224 C 1088.5070840541932,231.5452729587636 1151.0595995530523,218.30065041197483 1199,213 C 1246.9404004469477,207.69934958802517 1280.268685841985,210.34267131086435 1318,215 C 1355.731314158015,219.65732868913565 1397.8656570790076,226.3286643445678 1440,233 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#fcb900" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path></svg>
        <img src="https://res.cloudinary.com/dbmosnwqm/image/upload/v1719645760/qxi4brnnsnob3yp8mxbn.png" className='rounded-[30px] p-3' alt="" />
      
           </div>
        <div className='logo relative background-section h-[30vh] rounded-md p-5 translate-y-[10vh] ' >

            </div>
        {/* <div className='sticky -translate-x-[50px] translate-y-[100px]'>
        <svg xmlns="http://www.w3.org/2000/svg" id="SvgjsSvg1172" x="0" y="0" version="1.1" viewBox="0 0 511.999 511.999" width="150" height="200" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><path d="M498.523 246.291c37.941-67.923-8.514-149.499-85.88-157.204l-28.232-2.813c-20.59-2.053-38.982-10.974-54.263-28.128-53.185-59.695-152.219-44.954-184.82 26.764-7.94 17.466-22.298 31.438-40.428 39.344l-39.773 17.34c-63.399 27.64-84.894 104.334-44.848 159.183l25.236 34.563c5.481 7.508 9.482 15.807 11.893 24.666l12.532 46.073c17.167 63.115 88.755 97.22 151.241 70.693l5.35-2.271c15.901-6.751 33.992-8.387 50.932-4.616l82.048 18.269c79.933 17.798 150.39-51.574 132.54-127.825l-10.384-44.351c-4.203-17.953-1.524-36.78 7.544-53.012l9.312-16.675z" fill="rgba(255, 214, 64, 1)"></path></svg>
        </div> */}
    
  
    <div className="background-section rounded-t-[30px] sticky "  >
    {menu ? (<>
    <div className=' p-4 rounded-t-[30px]   z-10 ' style={{backgroundImage :"url('https://i.pinimg.com/736x/79/5c/ab/795cabc4647f73b365e2e6eabd0f34dc.jpg')"}}>
    {img?.map((item)=>{
   
      return <Card url={item?.url} ></Card> 
    })}
   
    </div>
   <WaveComponent />
    </>): ( <Skeleton />)}</div>
    <div >
   
    </div>
    </div>
    <RestroFooter />
    </>
  )
}

export default RenderPage