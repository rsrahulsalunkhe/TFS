import React from 'react'
import './style.scss'
import Header from '../../components/header/Header'
import SentimentCard from '../../components/sentimentCard/SentimentCard'

const Sentiments = () => {
  return (
    <div>
      <Header title='chana' />
      <div className='flex flex-wrap justify-between mx-2'>
        <SentimentCard />
        <SentimentCard />
        <SentimentCard />
      </div>
      <div className='load-btn py-3 lg:mx-[400px]'>LOAD MORE REPORTS</div>
    </div>
  )
}

export default Sentiments
