import React from 'react'
import './style.scss'
import Header from '../../components/header/Header'
import SentimentCard from '../../components/sentimentCard/SentimentCard'
import HeroSection from '../../components/heroSection/HeroSection'

const Sentiments = () => {
  return (
    <div className='lg:mx-[200px] text-center'>
      <Header title='sentiment' />
      <HeroSection page='sentiment' />
      <div className='flex flex-wrap justify-between'>
        <SentimentCard />
        <SentimentCard />
        <SentimentCard />
      </div>
      <div className='load-btn py-3 lg:mx-[400px]'>LOAD MORE REPORTS</div>
    </div>
  )
}

export default Sentiments
