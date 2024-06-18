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
                <p className='sub-title my-2'>Deals in Maize, Wheat, Moong, Chana Urad, Jowar, Kabuli</p>
                <div style={{lineHeight: 1.1}}>
                    <div className='flex mt-2'>
                        <div>
                            <img className='flex mt-1' src={opn} alt="" />
                        </div>
                        <p className='text-left ms-2' style={{color: 'var(--black)', fontWeight: 700, fontSize: '16px'}}>Trading Activity Very Dull in Chana and rate down</p>
                    </div>
                    <div className='flex mt-2'>
                        <div>
                            <img className='flex mt-1' src={cub} alt="" />
                        </div>
                        <p className='text-left ms-2' style={{color: 'var(--black)', fontWeight: 700, fontSize: '16px'}}>Trading Activity Very Dull in Chana and rate down</p>
                    </div>
                    <div className='flex mt-2'>
                        <div>
                            <img className='flex mt-1' src={fire} alt="" />
                        </div>
                        <p className='text-left ms-2' style={{color: 'var(--black)', fontWeight: 700, fontSize: '16px'}}>Trading Activity Very Dull in Chana and rate down</p>
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
