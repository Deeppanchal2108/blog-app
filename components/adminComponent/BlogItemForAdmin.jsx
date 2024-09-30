import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
function BlogItemForAdmin({ authorImg, author, BlogTitle, date,id,fetchData }) {
    const BlogDate = new Date(date)
    const handleDelete = async (id1) => {
        try {
            const response = await axios.delete("/api/blogs", {
                params: {
                    id: id1
                }
            })
            toast.success(response.data.msg)
            fetchData();
        } catch (error) {
            toast.error(response.data.msg)

        }
        
    }
  return (
      <tr className='border border-b'>
          <th scope='row' className=' hidden sm:flex  px-6 py-4 font-semibold items-center justify-center gap-2 '>
            <Image className='' src={authorImg?authorImg:assets.profile_icon} width={40} height={40}></Image>
              <h2>{ author?author:"no author"}</h2>
          </th>
        

          <th className='px-6 py-4 font-semibold' scope='row '>
             {BlogTitle?BlogTitle:"No Blog"}
          </th>


          <th scope='row ' className='px-6 py-4 font-semibold'>{BlogDate.toDateString()}</th>
          <th scope='row ' className='px-6 py-4 font-semibold'><button onClick={()=>handleDelete(id)} className='border border-black  px-3 py-2 rounded-lg'>Delete</button></th>
    </tr>
  )
}

export default BlogItemForAdmin
