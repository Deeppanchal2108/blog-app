import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
function Footer() {
  return (
      <div className='bg-black
    flex flex-col sm:flex-row justify-around gap-2 text-white items-center py-4'>
          <Image src={assets.logo_light} width={120} className='' />
          <p className=''>All right reverved.Copyright @blogger</p>
          <div className='flex '>
              <Image src={assets.facebook_icon} alt='Facebook Logo' width={40}/>
              <Image src={assets.twitter_icon} alt='Twitter logo' width={40} />

              <Image src={assets.googleplus_icon} alt='google logo' width={40} />

          </div>
    </div>
  )
}

export default Footer
