
import Applybutton from '@/app/components/Helper/Applybutton'
import JobCard from '@/app/components/Helper/JobCard'
import { authOptions } from '@/auth'
import JobData from '@/data'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const JobDetails = async ({params} : { params: {id: string}}) => {

  const singleJob = JobData.find((job)=>job.id.toString() == params.id)
  const session = await getServerSession(authOptions)

  return (
    <div className='mt-20 mb-12'>
      <div className='block sm:flex items-center justify-between w-[80%] mx-auto'>
        <div className='flex-[0.7]'>
          <JobCard job={singleJob!}/>
        </div>
        {session && <Applybutton/>}
        {!session && (
          <Link href='/signup'>
          <button className='px-8 py-3 bg-blue-600 rounded-lg text-white'>Entrar para se candidatar</button>
          </Link>
        )}
      </div>
        <div className='mt-16 w-[80%] mx-auto'>
            <h1 className='text-[20px] font-semibold' >Descrição da vaga</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo odio ipsa dicta saepe, quam libero mollitia vitae
             similique cupiditate voluptates, illum, nam iusto excepturi voluptatum eligendi! Reprehenderit odit rem atque.</p>
             <h1 className='text-[20px] mt-8 font-semibold' >Responsabilidades</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo odio ipsa dicta saepe, quam libero mollitia vitae
             similique cupiditate voluptates, illum, nam iusto excepturi voluptatum eligendi! Reprehenderit odit rem atque.</p>
             <h1 className='text-[20px] mt-8 font-semibold' >Skills</h1>
            <ul>
                <li>REACT</li>
                <li>NEXTJS</li>
                <li>TAILWIND</li>
                <li>JAVASCRIPT</li>
                <li>GITHUB</li>
            </ul>
        </div>
    </div>
  )
}

export default JobDetails