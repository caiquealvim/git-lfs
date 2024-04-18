import React from 'react'
import Helding from '../Helper/Helding'
import JobCategoryCard from '../Helper/JobCategoryCard'

const JobCategory = () => {
  return (
    <div className='pt-20 pb-15 bg-gradient-to-r from-zinc-900 to-zinc-500'>
      <Helding mainHeading='Vagas mais populares'
      subHeading='2024 empregos - 290 vagas adicionadas'
      />
      <div className='w-[80%] pb-[5rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center'>
        <JobCategoryCard image="/images/icon1.png" category="Economia" openPosition = "23"/>
        <JobCategoryCard image="/images/icon2.png" category="Marketing" openPosition = "03"/>
        <JobCategoryCard image="/images/icon3.png" category="Design" openPosition = "13"/>
        <JobCategoryCard image="/images/icon4.png" category="Desenvolvedores" openPosition = "33"/>
        <JobCategoryCard image="/images/icon5.png" category="Hotelaria" openPosition = "43"/>
        <JobCategoryCard image="/images/icon6.png" category="Mecânico" openPosition = "53"/>
        <JobCategoryCard image="/images/icon7.png" category="Serviços Gerais" openPosition = "63"/>
        <JobCategoryCard image="/images/icon8.png" category="Nutricionista" openPosition = "73"/>
        <JobCategoryCard image="/images/icon9.png" category="Gerente de Projetos" openPosition = "83"/>
      </div>
    </div>
  )
}

export default JobCategory
