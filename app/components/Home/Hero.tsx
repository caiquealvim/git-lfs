import Image from 'next/image'
import React from 'react'
import HeroImg from "@/public/images/hero.png"

const Hero = () => {
  return (
    <div className='pt-[1rem] pb-[3rem] bg-gradient-to-r from-zinc-800 to-zinc-900'>
       <div className='w-[100%] flex flex-col items-center justify-center'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]'>
            <div>
                <h1 className='text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-zinc-300 leading-[3rem]
                lg:leading-{4rem] font-extrabold '>
                    Uma <span className='text-blue-600'>maneira fácil</span> <br /> para você conseguir um emprego. 
                </h1>
                <p className='pt-[2rem] text-zinc-200 font-semibold'>
                    Cada mês, mais de 3 milhões de empregos rodam em torno deste site e ele foi feito
                    para você conseguir um emprego. Movendo 140.000 novas aplicações todos os dias.
                </p>
                <div className='mt-[1.5rem]'>
                    <input 
                    className='w-[60%] md:w-[70%] lg:w-[75%] px-5 py-4 outline-none rounded-lg bg-gray-200'
                    type="text" 
                    placeholder='Procurar Vaga'
                    />
                    <button className='px-5 py-4 outline-none rounded-e-md bg-red-600 text-white hover:bg-red-900'>
                        Procurar
                    </button>

                </div>
            </div>
            <div>
                <Image src={HeroImg} alt='hero' width={700} height={400} className=''/>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Hero