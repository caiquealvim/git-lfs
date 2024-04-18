import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gradient-to-r from-zinc-900 to-zinc-500'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start
        pb-[2rem] border-b-2 border-white border-opacity-10'>
            <div>
                <h1 className='text-[24px] text-red-600 mb-[1rem] font-bold uppercase'>
                   <i> Há Vagas </i>
                </h1>
                <p className='text-[14px] text-white text-opacity-70'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis, autem pariatur modi minima beatae 
                    at iusto quibusdam nisi mollitia ea iste consectetur earum vero, non quod illo ratione cupiditate!
                </p>
                <div className='mt-[1.5rem] flex items-center space-x-3'>
                <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 text-white text-[20px] rounded-full flex items-center justify-center flex-col'>
                   <FaFacebook/>
                </div>
                <div className='w-[2.4rem] h-[2.4rem] bg-sky-400 text-white text-[20px] rounded-full flex items-center justify-center flex-col'>
                   <FaTwitter/>
                </div>
                <div className='w-[2.4rem] h-[2.4rem] bg-red-600 text-white text-[20px] rounded-full flex items-center justify-center flex-col'>
                   <FaYoutube/>
                </div>
                <div className='w-[2.4rem] h-[2.4rem] bg-red-400 text-white text-[20px] rounded-full flex items-center justify-center flex-col'>
                   <FaInstagram/>
                </div>
                </div>
            </div>
            <div>
               <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem] '>
                  Sobre nós
               </h1>
               <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-40 mb-1 '>
                  trabalho
               </p>
               <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-40 mb-1 '>
                  Privacidade
               </p>
               <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-40 mb-1 '>
                  politicas
               </p>
               <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-40 mb-1 '>
                  aplicação
               </p>
               <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-40 mb-1 '>
                  candidatar-se
               </p>
            </div>
            <div>
               <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem] '>
                 Link Rápido
               </h1>
               <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-40 mb-1 '>
                  todos os trabalhos
               </p>
               <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-40 mb-1 '>
                  detalhe dos trabalhos
               </p>
               <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-40 mb-1 '>
                  como se candidatar
               </p>
               <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-40 mb-1 '>
                 resumo
               </p>
            </div>
            <div>
               <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem] '>
                  Entre em contato
               </h1>
               <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-40 mb-1 '>
                 021 897445274
               </p>
               <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-40 mb-1 '>
                  example@gmail.com
               </p>
               <p className='text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer text-opacity-40 mb-1 '>
                 Caique alvim desenvolvedor front end
               </p>
            </div>
         
        </div>
        <div>
               <h1 className='mt-[1rem] text-white text-[14px] w-[80%] mx-auto opacity-50'>
                  COPY RIGHT BY CAIQUEALVIM-DESENVOLVEDOR FRONT END
               </h1>
            </div>
    </div>
  )
}

export default Footer
