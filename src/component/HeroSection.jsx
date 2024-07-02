import React from 'react'

function HeroSection() {
  return (
    <>
    <div className='md:flex bg-[#F7F7F7] '>
<div className='md:w-[40vw] rounded-md p-5 ml-[8vw] mt-2'>

    <img src="https://img.freepik.com/free-vector/illustration-person-scanning-qr-code-with-smartphone_23-2148621302.jpg?t=st=1719488405~exp=1719492005~hmac=d4a909a95772f20621887c73f0f7d4c8ac17255861ba3d469bafb60ac5c99bfe&w=740" alt="" />
</div>
    <section className="md:w-[60vw] text-black mr-[2vw]">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-red-300 font-abc via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User Flow.

        <span className="sm:block font-abc"> Increase Conversion. </span>
      </h1>

      <p className="mx-auto font-abc mt-4 max-w-xl sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-black hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </div>

    </>
  )
}

export default HeroSection