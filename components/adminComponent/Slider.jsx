import React from 'react'
import Link from 'next/link'
import { assets } from '@/assets/assets'
import Image from 'next/image'

function Slider() {
    return (
        <>
        <div className=' flex flex-col bg-slate-200 '>
            <Link href={"/"} className='px-5 sm:pl-8 md:pl-14 py-3 border-b border-r border-black'>
                <Image src={assets.logo} width={200} alt='Logo of the brand' className='w-[160px] sm:w-[200px] ' />
            </Link>
            <div className='h-[100vh] bg-slate-200 w-70  '>
                <div className='flex flex-col gap-5 mt-5 ml-5'>

                    <Link className=' bg-white px-4 sm:px-10 py-2 border-black border shadow-[-7px_7px_0px_#000000] hover:scale-105 ' href={"/admin/addProduct"}>Add Product</Link>


                        <Link className='hover:scale-105  bg-white px-4 sm:px-10 py-2 border-black border shadow-[-7px_7px_0px_#000000] ' href={"/admin/blogList"}>Blog List</Link>


                        <Link className='hover:scale-105  bg-white px-4 sm:px-10 py-2 border-black border shadow-[-7px_7px_0px_#000000] ' href={"/admin/subscription"}>Subscription</Link>

                </div>
            </div>
          
        </div>
          
        </>
    )
}

export default Slider
