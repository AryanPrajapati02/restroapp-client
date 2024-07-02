import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {getUserDataAsync , deleteMenuAsync} from '../slice/slices'
import { useNavigate } from 'react-router-dom'
import MenuModel from '../component/MenuModel'
import DomainModel from '../component/DomainModel'

function RestroDashboardPage() {
    const user = useSelector(state => state?.counter?.loggedInUser)
    const domainStatus = useSelector(state => state?.counter?.domainStatus)
    const domain = useSelector(state => state?.counter?.domain)

const navigate = useNavigate()
  const dispatch = useDispatch()
  const menudata = useSelector(state =>state?.counter?.menu)

  const [showModel , setShowModel] = useState(false)
  const [domainModel , setDomainModel] = useState(false)
//
const handleDelete = (data)=>{
   const selectedImg = data.public_id
   const public_id = ({
    public_id: selectedImg,
    
   }) 
   dispatch(deleteMenuAsync(public_id))

}
const [qrCodeUrl, setQrCodeUrl] = useState('');

const host = window.location.host
console.log(host)


useEffect(()=>{
  const d =dispatch(getUserDataAsync()) 
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://${domain && domain}.${host}`;
  
  // Set the QR code URL in the state
  setQrCodeUrl(url);
 

},[dispatch])
  return (
    <>
    
    <div className='bg-zinc-800 min-h-[100vh] '>
     <div className='proifle rounded-full  relative top-[8vh] ml-[35vw]'>
      <img src="https://img.freepik.com/premium-vector/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_365941-687.jpg" className='rounded-full h-[15vh]  p-2' alt="" />
     </div>
      <h1 className='text-white text-3xl mt-[10vh]  text-center font-bold'>Welcome, <span className='text-yellow-300 capitalize'>{user?.name}</span></h1>
      <div className='bg-[#AED2DB] border-2 border-blue-500 m-3 mr-5 ml-5 mt-5  rounded-2xl p-4'>
        <h1 className='text-2xl font-bold  text-center  '> Your Profile</h1>
        <h2 className='text-xl font-medium font-abc mt-3 text-black'>Email : {user?.email}</h2>
        <h2 className='text-xl font-medium font-abc  mt-2 text-black'>Phone : {user?.phone}</h2>
      </div>
      <div>
        <h1 className='mt-5 p-5 font-bold text-2xl  text-white'>Your Restro :<span className='text-yellow-300 capitalize'> {user?.restroname}</span> </h1>
        <div className='bg-red-200 border-2 border-red-400  mr-5 ml-5 mt-5  rounded-2xl p-4 '>
          {user && domainStatus ?  
       <><h2 className='text-xl font-semibold'>Your Domain : <span className='text-blue-700 underline'><a>http://{domain && domain}.mykitab.live</a></span>
       <span className="whitespace-nowrap rounded-full bg-green-300 ml-2 px-2.5 py-0.5 text-sm text-green-800">
  Live
</span>
          </h2>
        
        </>
:
<h2 className='text-lg font-semibold'>Your Domain : <span className=''>     
      <button className='px-3 py-2 bg-blue-600 rounded-xl ml-3 text-white' onClick={()=>setDomainModel(true)}>+ Get Your Domain</button>
</span></h2>

           }
           {domainModel && <DomainModel close={()=>setDomainModel(false)} />}
        </div>
      </div>

      <div>
        <div className='flex justify-between p-4 items-center'>

        <h1 className='text-2xl text-yellow-400 font-bold p-2 m-3'>Menu </h1>
       <h1> <button className='bg-yellow-200  px-3 py-2 rounded-lg font-semibold  text-black' onClick={()=>setShowModel(true)} >+ Add Menu</button></h1>
        </div>
      {showModel &&  <MenuModel onClose={()=>{
        setShowModel(false)
      }} />}
        <div className='grid grid-cols-2 p-4 gap-4'>
          {user && menudata?.map((item, index) => (
            <div key={index} className='bg-gray-200 p-2 rounded-xl '>
             <img src={item?.url} className='object-fill rounded-xl mb-2'/>
             <button className=' bg-red-500 rounded-lg px-4 py-2' onClick={() =>handleDelete(item)} >Delete</button>
             
            </div>
          ))}
        </div>
      </div>

      <div className=' p-4 items-center'>
<div className='flex justify-between'>

<h1 className='text-2xl text-yellow-400 font-bold p-2 m-3'>Qr Code</h1>
</div>
<div className='relative'>

<img src="https://res.cloudinary.com/dbmosnwqm/image/upload/v1719850936/qr2_segaxw.png" className='rounded-xl p-4 m-3 ' alt="" />
<div className='absolute top-[28vh]  left-[32vw]'>
     
      {qrCodeUrl ? (
        <img src={qrCodeUrl}  alt="QR Code" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
      </div>

</div>
      <div className='flex justify-between p-4 items-center'>

<h1 className='text-2xl text-yellow-400 font-bold p-2 m-3'>Offer Zone</h1>
<h1> <button className='bg-yellow-200  px-3 py-2 rounded-lg font-semibold  text-black'>+ Offer</button></h1>
</div>
   
    </div>
    </>
  )
}

export default RestroDashboardPage