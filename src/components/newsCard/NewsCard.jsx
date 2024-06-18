import React from 'react'
import './style.scss'
import cub from './../../assets/cub.svg'
import fire from './../../assets/fire.svg'
import opn from './../../assets/opn.svg'
import banner from './../../assets/banner.jpeg'
import banner2 from './../../assets/banner2.jpeg'

const NewsCard = () => {
  return (
    <div className='lg:w-[32%]'>
        <div className='news-card'>
            <img src={banner} alt="" />
            <div className='card-detail'> 
                <p className='news-card-date'>13 March 2021</p>
                <h1 className='my-2' style={{lineHeight: 1.15}}>Maize trade offer Aboti canvassing Jalgaon</h1>
                <p className='sub-title my-2' style={{lineHeight: 1.15}}>Deals in Maize, Wheat, Moong, Chana Urad, Jowar, Kabuli</p>
                <div style={{lineHeight: 1.15}}>
                    <div className='flex mt-2'>
                        <div className='w-[5%] h-[20px]'>
                            <img className='w-full h-full' src={opn} alt="" />
                        </div>
                        <p className='w-[94%] text-left ms-2' style={{color: 'var(--black)', fontWeight: 700, lineHeight: 1.1}}>Trading Activity Very Dull in Chana and rate down</p>
                    </div>
                    <div className='flex mt-2'>
                        <div className='w-[5%] h-[20px]'>
                            <img className='w-full h-full' src={cub} alt="" />
                        </div>
                        <p className='w-[94%] text-left ms-2' style={{color: 'var(--black)', fontWeight: 700, lineHeight: 1.1}}>Demand in moong very good & market up by 50</p>
                    </div>
                    <div className='flex mt-2'>
                        <div className='w-[5%] h-[20px]'>
                            <img className='w-full h-full' src={fire} alt="" />
                        </div>
                        <p className='w-[94%] text-left ms-2' style={{color: 'var(--black)', fontWeight: 700, lineHeight: 1.1}}>Urad Continues to trade firm</p>
                    </div>
                </div>
                <p className='load-more text-right me-2'><i>Load More Reports {'>'}</i></p>
            </div>
        </div>

        <div className='banner-img my-3'>
            <img src={banner2} alt="" />
        </div>
    </div>
  )
}

export default NewsCard
