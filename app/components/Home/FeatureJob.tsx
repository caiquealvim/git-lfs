import React from 'react'
import Helding from '../Helper/Helding'
import JobData from '@/data'
import Link from 'next/link'
import JobCard from '../Helper/JobCard'

const FeatureJob = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
        <Helding
        mainHeading='Escolha um emprego'
        subHeading='conheça seu valor e enconte seu trabalho e melhore sua vida.'
        />
        <div className='mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {JobData.map((job)=>{
                return(
                    <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
                        <JobCard job={job}/> 
                    </Link>
                )
            })}

        </div>
          <div className='mt-6 mb-6 justify-center items-center flex'>
            <Link href='/job/alljobs' className='bg-blue-600 hover:bg-blue-900 text-white px-7 p-5 transition-all duration-500 rounded-lg 
            mx-auto '>
                Ver todas as vagas
            </Link>
            </div>      
    </div>
  )
}

export default FeatureJob