import React from 'react'
import './style.scss'
import Header from '../../components/header/Header'
import TimeLineCard from '../../components/timeLineCard/TimeLineCard'
import banner from './../../assets/banner.jpeg'
import banner3 from './../../assets/banner3.jpeg'
import HeroSection from '../../components/heroSection/HeroSection'

const TimeLine = () => {
  return (
    <div className='lg:mx-[200px] text-center'>
      <Header title='timeline' />
      <HeroSection page='timeline' />
      <div className='flex flex-wrap justify-between mx-2'>
        <TimeLineCard img={banner} />
        <TimeLineCard img={banner3} />
        <TimeLineCard img={banner3} />
        <TimeLineCard img={banner} />
      </div>
    </div>
  )
}

export default TimeLine
