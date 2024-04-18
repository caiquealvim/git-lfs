import { Job } from '@/data'
import React from 'react'
import Image from 'next/image'
import { FaMapLocation } from 'react-icons/fa6'
import { BiMoney } from 'react-icons/bi'

interface Props{
    job:Job
}

const JobCard = ({job}:Props) => {
  return (
    <div className='p-4 mb-6 bg-zinc-600 relative border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg 
     border-opacity-10'>
        <div>
            <Image src={job?.image} alt={job?.title} width={50} height={50} />
        </div>
        <div>
            <h1 className='text-[17px] text-white font-semibold mb-[0.5rem]'>
                {job?.title}
            </h1>
            <div className='flex items-center md:space-x-10 space-x-4'>
                {/* location */}
                <div className='flex items-center space-x-2'>
                    <FaMapLocation />
                    <p className='text-[14px] text-white font-semibold text-opacity-90'>
                    {job?.location}
                    </p>
                </div>
                {/* salary */}
                <div className='flex items-center space-x-2'>
                    <BiMoney />
                    <p className='text-[14px] text-white font-semibold text-opacity-90'>
                    {job?.salary}
                    </p>
                </div>
            </div>
            <div className='flex items-center space-x-2 sm:space-x-4 mt-[1rem]'>
            <div className='text-[14px] sm:text-[14px] text-white text-opacity-80 px-3 sm:px-6 pu-1 rounded-full bg-opacity-50 font-semibold capitalize bg-green-400'>
                {job?.jobtype}
            </div>
            <div className='text-[14px] sm:text-[14px] text-white text-opacity-80 px-3 sm:px-6 pu-1 rounded-full bg-opacity-50 font-semibold capitalize bg-blue-400'>
                privado
            </div>
            <div className='text-[14px] sm:text-[14px] text-white text-opacity-80 px-3 sm:px-6 pu-1 rounded-full bg-opacity-50 font-semibold capitalize bg-red-400'>
                urgente
            </div>
            </div>
      
            <div>
            </div>
        </div>
    </div>
  )
}

export default JobCard