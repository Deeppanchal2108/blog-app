"use client"
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'

import axios from 'axios'
function BlogList() {
    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);
    const fetchData = async () => {
        const response = await axios.get('/api/blogs');
        setBlogs(response.data.blogs);
    }
    useEffect(() => {
        fetchData();
    },[])
  return (
    <div className='max-w-full mx-auto'>
          <div className='flex justify-center gap-6 my-6'>
              <button onClick={() => setMenu("All")} className={menu==="All" ?`bg-black text-white py-1 px-4 rounded-sm`:""}>All</button>
              <button className={menu === "Technology" ? `bg-black text-white py-1 px-4 rounded-sm` : ""} onClick={() => setMenu("Technology")}  >Technology</button>
              <button className={menu === "Lifestyle" ? `bg-black text-white py-1 px-4 rounded-sm` : ""} onClick={() => setMenu("Lifestyle")} >Lifestyle</button>
              <button className={menu === "Startup" ? `bg-black text-white py-1 px-4 rounded-sm` : ""} onClick={() => setMenu("Startup")} >StartUp</button>

          </div>
          <div className=' flex justify-around flex-wrap gap-y-4 gap-x-6 mb-10 sm:mx-10 '>
              {
                  blogs.filter((item)=>menu==="All"?true:item.category===menu).map((item, index) => {
                      return(
                          <BlogItem key={index} title={item.title} description={item.description}
                              image={item.image} id={item._id}
                              category ={item.category}
                          />)
                     
                  })
              }
          </div>
    </div>
  )
}

export default BlogList
