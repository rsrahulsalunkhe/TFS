import React from 'react'
import './style.scss'
import opn from './../../assets/opn.svg'
import banner2 from './../../assets/banner2.jpeg'

const SentimentCard = () => {
  return (
    <div className='w-full lg:w-[32%]'>
        <div className='p-4' style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px'}}>
            <div className='flex'>
                <span style={{color: 'var(--black-light)', fontWeight: 700}}>27-09-2023</span>
                <span style={{color: 'green', fontWeight: 700}} className='ms-auto'>STEADY TO FIRM</span>
            </div>
            <div className='flex mt-2'>
                <div className='flex flex-col text-left'>
                    <p>DELHI</p>
                    <p>RJ Line</p>
                </div>
                <div className='ms-auto'>
                    <span className='me-3'>₹5100-5200</span>
                    <span className='py-1 px-2' style={{backgroundColor: 'green', color: 'white'}}>+50</span>
                </div>
            </div>
            <div className='flex justify-around mt-2'>
                <div className='flex flex-col justify-self-start'>
                    <p>OPEN</p>
                    <p>5000-5100</p>
                    <p>812</p>
                </div>
                <div>
                    <p>OPEN</p>
                    <p>5000-5100</p>
                    <p>812</p>
                </div>
                <div>
                    <p>OPEN</p>
                    <p>5000-5100</p>
                    <p>812</p>
                </div>
            </div>

            <div className='flex mt-2'>
                <div>
                    <img className='flex mt-1' src={opn} alt="" />
                </div>
                <p className='text-left ms-2' style={{color: 'var(--black)', fontWeight: 700, fontSize: '16px'}}>Trading Activity Very Dull in Chana and rate down</p>
            </div>
            <p className='text-left ms-7 mt-2' style={{color: 'var(--black-light)', fontWeight: 700}}>M P AGRO OVERSEAS, DELHI</p>
        </div>

        <div className='banner-img my-3'>
            <img src={banner2} alt="" />
        </div>
    </div>
  )
}

export default SentimentCard
