"use client"
import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { toast } from 'react-toastify';

import axios from 'axios';
function Header() {
    const [email, setEmail] = useState("");
    const handleClick = async (e) => {
        e.preventDefault();
        if (!email) {
            return;
      }
        const formData = new FormData();
        formData.append("email",email)
        const response = await axios.post('/api/email', formData)
        if (response.data.success) {
            toast.success(response.data.msg)
            setEmail("")
        } else {
            toast.error("Something went wrong")
        }
        
    }


  return (
    <div className='px-5 py-5 md:px-12 lg:px-28'>
          <div className='flex justify-between items-center'>
              <Image src={assets.logo} alt='Logo Image *' className='w-[140px] sm:w-[180px] '></Image>
              <button className=' flex items-center border border-solid border-black shadow-[-7px_7px_0px_#000000] md:py-3 md:px-4 p-2'>Get Started</button>
              
          </div>
          <div className='text-center my-6'>
              <h1 className='text-2xl sm:text-4xl font-medium font-mono'>Latest Blogs</h1>
              <p className='max-w-[740px] mx-auto mt-8 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum voluptatum obcaecati harum saepe asperiores minus molestias facilis ad, ducimus porro accusantium ipsam officia a? 
              </p>
          </div>
          <form className=' flex items-center max-w-[500px] mx-auto justify-between border border-solid  border-black overflow-x-hidden shadow-[-7px_7px_0px_#000000] '>
              <input type="email" required value={email} className=' outline-none border-l pl-1' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' />
              <button type='submit' className= ' border-l py-4 px-4 sm:px-8 border-black active:bg-slate-800 active:text-white transition-all duration-200' onClick={(e)=>handleClick(e)}>Subscribe</button>
          </form>

    </div>
)
}

export default Header
