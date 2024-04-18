'use client'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Applybutton = () => {
  const notify = () => toast.success("Obrigado por se candidatar!");
  return (
    <div>
      <button onClick={notify} className=' px-10 cursor-pointer rounded-lg py-3 bg-blue-600 font-semibold hover:text-white transition-all duration-500 hover:bg-blue-900'>
        Candidatar-se
      </button>
      <ToastContainer position='top-center'  />

    </div>
  )
}

export default Applybutton