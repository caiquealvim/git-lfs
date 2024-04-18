import React from 'react'

interface Props{
    mainHeading : string,
    subHeading: string
}

const Helding = ({mainHeading,subHeading}:Props) => {
  return (
    <div className='text-center p-3 '>
      <h1 className='text-white text-[27px] opacity-90 font-bold'>{mainHeading}</h1>
      <p className='mt-[1rem] text-[15px] text-zinc-200 text-opacity-80 font-medium'>{subHeading}</p>
    </div>
  )
}

export default Helding
