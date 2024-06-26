import React from 'react'
import './style.scss'
import Header from '../header/Header'
import cub from './../../assets/cub.svg'
import fire from './../../assets/fire.svg'
import opn from './../../assets/opn.svg'
import banner from './../../assets/banner.jpeg'
import banner2 from './../../assets/banner2.jpeg'
import whatsapp from './../../assets/whatsapp.svg'

const Detail = () => {
  return (
    <div>
      <Header title='detail' />
        <div className='detail'> 
            <p className='news-card-date'>13 March 2021</p>
            <h1 className='my-2' style={{lineHeight: 1.15}}>Maize trade offer Aboti canvassing Jalgaon Jaswant Purab Bafna</h1>
            <p className='sub-title my-2' style={{lineHeight: 1.15}}>Deals in Maize, Wheat, Moong, Chana Urad, Jowar, Wheat, Moong, Chana Urad, Jowar</p>
        </div>
        <div>
          <img src={banner} alt="" />
          <img src={banner} alt="" />
        </div>
        <div className='p-4'>
          <span>Chana prices continued to trade weak across major centres tracking weak cues from futures prices. Bid trend in Nafed auction also indicated similar sentiments.</span>
        </div>

        <div>
          <img src={banner} alt="" />
        </div>

        <div className='p-4'>
          <span>Chana prices continued to trade weak across major centres tracking weak cues from futures prices. Bid trend in Nafed auction also indicated similar sentiments.</span>
        </div>

        <div className='px-4'>
          <span style={{fontWeight: 'bold'}}>Link : </span>
          <a href="www.medium.com">www.medium.com</a>
        </div>

        <div className='share'>
          <div>
            <img src={whatsapp} alt="" />
          </div>
          <span>Share on Whatsapp</span>
        </div>
    </div>
  )
}

export default Detail
