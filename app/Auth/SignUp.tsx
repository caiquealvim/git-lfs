'use client'
import React from 'react'
import Image from 'next/image'
import ImageUrl from "@/public/images/emprego.png"
import { signIn } from 'next-auth/react'

const SignUpPage = () => {
  return (
    <div className='overflow-hidden h-[84vh] flex flex-col items-center justify-center'>
     <Image src={ImageUrl} alt='image' width={400} height={200}/>
     <button onClick={()=>{signIn('google',{callbackUrl: process.env.NEXT_PUBLIC_URL});
    }} className='px-12 py-3 mt-[2rem] bg-red-400 hover:bg-red-600 transition-all duration-300 rounded-lg text-white'>
      SignUp
     </button>
    </div>
  )
}

export default SignUpPage