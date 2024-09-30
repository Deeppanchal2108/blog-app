import React from 'react'
import { assets} from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
function BlogItem({title, image , category, description, id}) {
  return (
      <div className='  max-w-[330px] sm:max-w-[300px]   hover:shadow-[-7px_7px_0px_#000000] transition-all duration-200 border border-solid border-black'>
          <Link href={`/blog/${id}`}>
              <Image width={400} height={400} src={image} alt='Picture showing the blog ' />
          </Link>
              <h2 className='bg-black mt-4 ml-5 inline-block text-sm py-1 text-white rounded-sm px-2 '>{category}</h2>
          <div className='p-5'>
              <h3 className='font-medium leading-tight my-2'>{title}</h3>
              <p className='text-xs text-slate-900 mb-4 '>{description}</p>
              <Link href={`/blog/${id}`}>
              <div className='flex items-center'>
                 
                  Read More
                  <Image className='ml-2 w-4 
                 ' src={assets.arrow} alt='arrow logo '/>

              </div>
          </Link>
          </div>
        
    </div>
  )
}

export default BlogItem
