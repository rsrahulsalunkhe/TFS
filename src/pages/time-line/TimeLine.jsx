import React from 'react'
import './style.scss'
import Header from '../../components/header/Header'
import TimeLineCard from '../../components/timeLineCard/TimeLineCard'

const TimeLine = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-wrap justify-between mx-2'>
        <TimeLineCard />
        <TimeLineCard />
        <TimeLineCard />
        <TimeLineCard />
      </div>
    </div>
  )
}

export default TimeLine
