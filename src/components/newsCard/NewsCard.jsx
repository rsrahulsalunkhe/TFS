import React from 'react'
import './style.scss'
import cub from './../../assets/cub.svg'
import fire from './../../assets/fire.svg'
import opn from './../../assets/opn.svg'
import banner from './../../assets/banner.jpeg'

const NewsCard = () => {
  return (
    <div className='news-card lg:w-[354px]'>
        <img src={banner} alt="" />
        <div className='card-detail'> 
            <p>13 March 2021</p>
            <h1 className='heading'>Maize trade offer Aboti canvassing Jalgaon</h1>
            <p className='sub-title'>Deals in Maize, Wheat, Moong, Chana Urad, Jowar, Kabuli</p>
            <div className='flex gap-2'>
                <img src={opn} alt="" />
                <p>Trading Activity Very Dull in Chana and rate down</p>
            </div>
            <div className='flex gap-2'>
                <img src={cub} alt="" />
                <p>Trading Activity Very Dull in Chana and rate down</p>
            </div>
            <div className='flex gap-2'>
                <img src={fire} alt="" />
                <p>Trading Activity Very Dull in Chana and rate down</p>
            </div>
            <p className='load-more text-right'>Load More Reports {'>'}</p>
        </div>
    </div>
  )
}

export default NewsCard
