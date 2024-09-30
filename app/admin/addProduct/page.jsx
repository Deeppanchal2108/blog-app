"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
function page() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Lifestyle",
    author: "Deep panchal",
    authorImg: "/author.png"
  });
  const addData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  }
  const submitButton = async (e) => {
    
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author",data.author)
    formData.append("authorImg", data.authorImg)
    formData.append("image",image)


    const response = await axios.post("/api/blogs", formData);
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error ,Something went wrong ");
    }
    setImage(null);
    setData({
      title: "",
      description: "",
      category: "Lifestyle",
      author: "Deep panchal",
      authorImg: "/author.png"
    });
 }
  return (
    <div className=' px-3 sm:px-10 md:px-14 py-5'>
      <form onSubmit={submitButton}>
        <p className='mb-4 text-xl'>Upload Thumbnail</p>
        <label htmlFor="image">
          <Image className=' cursor-pointer object-cover overflow-hidden w-[120px] h-[70px]' alt='Upload Image *'  width={140} height={70} src={image?URL.createObjectURL(image):assets.upload_area}/>
        </label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} id='image' required hidden />
        <p className='text-xl mt-4'>Blog Title </p>
        <input name="title" type="text" value={data.title} onChange={addData} placeholder='Enter Blog title' required className='mt-2 border border-black px-2 py-1 w-[200px] sm:w-[300px] md:w-[400px] rounded-sm' />
        <p className='text-xl mt-4'>Blog Description</p>
        <textarea name="description" placeholder='Enter Blog decsription' value={data.description} onChange={addData} required rows={5} className='mt-2 border border-black px-2 py-1 w-[200px] resize-none rounded-sm sm:w-[300px] md:w-[400px]' />
        <p className='text-xl mt-2'>Blog Category</p>
        <select name="category" value={data.category} onChange={addData} className=' px-5 py-2 mt-2 text-sm text-slate-700 border border-slate-700'>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Technology">Technology</option>

          <option value="Startup">Startup</option>

        </select>
        <br />
        <button type="submit" className='px-12 py-2 border mt-4 border-black bg-black text-white'>Add</button>
       </form>
     
    </div>
  )
}

export default page
