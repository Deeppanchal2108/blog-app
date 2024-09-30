"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Footer from "@/components/Footer";
import Link from 'next/link'
import axios from 'axios';
import LoadComponent from '@/components/LoadComponent';

function page({ params }) {
    const [Data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/blogs/`, {
                params: {
                    id: params.id
                }
            });
            setData(response.data.blog)
            console.log(response.data.blog)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        Data ? <>
            < div className='bg-slate-300  px-5 py-5 md:px-12 lg:px-28' >
                <div className='flex justify-between items-center  '>
                    <Link href={'/'}>
                        <Image src={assets.logo} alt='Logo Image *'  className='w-[140px] sm:w-[180px] '/>
                    </Link>
                    <button className=' flex items-center border border-solid border-black shadow-[-7px_7px_0px_#000000] md:py-3 md:px-4 p-2'>Get Started</button>
                </div>
                <div className='mt-5 flex flex-col gap-3 items-center'>
                    <h1 className='text-2xl sm:text:3xl md:text-4xl font-sans font-bold text-center'>{Data.title}</h1>
                    <Image className=' 
                    border-2 border-white rounded-full
                    '
                        
                        src={Data.authorImg}
                        alt='Author '
                        width={50} 
                        height={50}
                    ></Image>
                    <Image className=' 
                    border-2 border-white
                    '
                        height={600}
                        src={Data.image}
                        alt='blog Image Here*'
                        width={500}
                    ></Image>

                    
                </div>
                <div className='max-w-[800px] mx-auto mt-10 '>
                    <h3 className='font-sans inline-block font-semibold '>Title : </h3>
                    <span className=''>{" "+Data.title}</span>
                    <div>
                        <h4 className='font-sans inline-block font-semibold '>Category :  </h4>
                        <span>{" " + Data.category}</span>
                    </div>
                    
                    <h4 className='font-sans font-semibold '>Description :</h4>
                    <p >{Data.description}</p>
                </div>
          
            </div >    <Footer /></> : <><div><LoadComponent/></div></>

    )
}

export default page
