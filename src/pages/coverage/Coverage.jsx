import React from 'react'
import './style.scss'
import Header from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'

const Coverage = () => {
  return (
    <div className='lg:mx-[200px] text-center'>
      <Header />
      <HeroSection page='coverage' />
    </div>
  )
}

export default Coverage
