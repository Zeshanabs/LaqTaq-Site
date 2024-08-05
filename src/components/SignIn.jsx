import React from 'react'

const SignIn = () => {
  return (
    <>

<div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"> </div>
    
    <div className='grid items-center justify-center bg-slate-300 my-40 mx-52'>
      <input type="text" placeholder='Username' className='border border-orange-500 rounded-2xl my-7 px-2' />

      <input type="text" placeholder='Password' className='border border-orange-500 rounded-2xl my-7 px-2 ' />
      <button className='border border-orange-500 rounded-2xl my-3 mx-auto px-2 hover:font-bold hover:border p-2 hover:bg-orange-400'>Sign In</button>



    </div>
    </>
  )
}

export default SignIn
