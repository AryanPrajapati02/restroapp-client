import React from 'react'

function Card({url}) {
  return (
   <>
   
   <div className="block rounded-t-3xl z-10 ">
  <img
    alt=""
    src={url}
    className="h-full mt-3 w-full  rounded-3xl object-cover  lg:h-72"
  />


</div>
   </>
  )
}

export default Card