import React from 'react'
import './style.scss'
import Header from '../../components/header/Header'
import SentimentCard from '../../components/sentimentCard/SentimentCard'

const Sentiments = () => {
  return (
    <div>
      <Header />
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
