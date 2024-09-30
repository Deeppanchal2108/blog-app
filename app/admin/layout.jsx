import { assets } from "@/assets/assets"
import Slider from "@/components/adminComponent/Slider"
import Image from "next/image"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function layout({ children }) {
 

    return (
        <>
            <div className="flex ">
                <ToastContainer theme="dark"  />
                <Slider />
             
                <div className=" flex w-full flex-col">
                 
                    <div className="flex justify-between  w-full sm:h-[64px] md:h-[69px] h-[54px] items-center sm:px-14 px-4 border-b border-black ">
                        <h2>Admin Panel</h2>
                        <Image width={40} alt="Icon of the Admin"
                            src={assets.profile_icon}
                        ></Image>
                    </div>
                    {children}
                </div>
               
            </div>
         
          
        </>
    )
};