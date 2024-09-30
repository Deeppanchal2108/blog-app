import React from 'react'
import { Spinner } from "@nextui-org/spinner";
function LoadComponent() {
  return (
    <div className='w-full h-screen flex justify-center items-center '>
          <Spinner className='z-10' color="success" />
    </div>
  )
}

export default LoadComponent;
