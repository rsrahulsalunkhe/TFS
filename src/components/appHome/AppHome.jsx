import React from 'react'
import './style.scss'
import chana from './../../assets/chana.png'
import Header from '../header/Header'
import { useNavigate } from "react-router-dom";
import home from './../../assets/home.svg'
import futures from './../../assets/futures.svg'
import account from './../../assets/account.svg'

const AppHome = () => {
    const navigate = useNavigate();
  return (
    <div className='text-center'>
        <Header />
        <div className='mx-[15%]'>
            <div className='hr-lines'>
                <span><span style={{fontSize: '24px', padding: 0, backgroundColor: 'transparent'}}>C</span>EREALS</span>
            </div>
        </div>

        <div className='flex justify-evenly'>
            <div className='commodity' onClick={() => navigate(`/categorie/chana`)} >
                <div className='img'>
                    <img src={chana} alt="" />
                </div>
                <span>Bajra</span>
                <p className='special'>• Special Report</p>
            </div>
        </div>

        <div className='mx-[15%]'>
            <div className='hr-lines'>
                <span><span style={{fontSize: '24px', padding: 0, backgroundColor: 'transparent'}}>P</span>ULSES</span>
            </div>
        </div>

        <div className='flex justify-evenly'>
            <div className='commodity' >
                <div className='img'>
                    <img src={chana} alt="" />
                </div>
                <span>Chana</span>
                <p className='special'>• Special Report</p>
            </div>
            <div className='commodity' >
                <div className='img'>
                    <img src={chana} alt="" />
                </div>
                <span>Chana</span>
            </div>
            <div className='commodity' >
                <div className='img'>
                    <img src={chana} alt="" />
                </div>
                <span>Chana</span>
            </div>
        </div>

        <div className='text-left px-2 py-10 bg-orange-100 mt-6'>
            <span className='text-yellow-500 text-6xl font-bold'>Mandi Central</span>
            <p className='text-xl mt-4'>Agri Trade Assistance App</p>
        </div>

        <div className='w-full flex justify-around h-auto py-1 px-3 bg-white fixed bottom-0 left-0 z-50'>
            <div className='flex flex-col items-center'>
                <div className='w-[30px] h-[30px]'>
                    <img className='w-full h-full' src={home} alt="" />
                </div>
                <span>HOME</span>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-[30px] h-[30px]'>
                    <img className='w-full h-full' src={futures} alt="" />
                </div>
                <span>FUTURES</span>
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-[30px] h-[30px]'>
                    <img className='w-full h-full' src={account} alt="" />
                </div>
                <span>ACCOUNT</span>
            </div>
        </div>
    </div>
  )
}

export default AppHome
