"use client"
import React, { useEffect, useState } from 'react'
import BlogItemForAdmin from '@/components/adminComponent/BlogItemForAdmin'

import axios from 'axios';
function page() {
  const [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/blogs');
      setBlogs(response.data.blogs);
      console.log("Data fetched Successfully ")
    } catch (error) {
      console.log("Something went wrong ", error)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className='ml-10 mt-6'>
      <h1 className='text-black font-sans '>Blog Details</h1>
      <div className='mt-2 h-[80vh] max-w-[850px] min-w-[600px] border border-black overflow-x-auto'>
        <table className='w-full text-sm  font-sans font-medium '>
          <thead className='border border-b bg-slate-100' >
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-4 font-semibold'>Author Name</th>
              <th scope='col' className='px-6 py-4 font-semibold'>Blog Title</th>
              <th scope='col' className='px-6 py-4 font-semibold'>Date</th>
              <th scope='col' className='px-6 py-4 font-semibold'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              blogs.map((item, index) => {
                return <BlogItemForAdmin key={index} author={item.author} id={item._id} authorImg={item.authorImg} BlogTitle={item.title} date={item.date} fetchData={ fetchData} />
              })
            }

          </tbody>
        </table>
      </div>
    </div>

  )
}

export default page
