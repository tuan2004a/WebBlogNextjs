import { assets } from '@/Assets/assets'
import Sibebar from '@/Components/AdminComponents/Sibebar'
import Image from 'next/image'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const layout = ({children}) => {
    return (
        <div>
            <div className='flex '>
                <ToastContainer theme="dark"/>
                <Sibebar/>
                <div className='flex flex-col w-full '>
                    <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black'>
                        <h3 className='font-medium'>Admin Panel</h3>
                        <Image src={assets.profile_icon} width={40} alt=''/>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout
