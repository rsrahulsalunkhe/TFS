import React from 'react'
import './style.scss'
import Header from '../../components/header/Header'
import TimeLineCard from '../../components/timeLineCard/TimeLineCard'

const TimeLine = () => {
  return (
    <div>
      <Header />
      <div>
        <TimeLineCard />
      </div>
    </div>
  )
}

export default TimeLine
