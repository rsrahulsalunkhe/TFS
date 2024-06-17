import React from 'react'
import './style.scss'
import arrowLeftSolid from './../../assets/arrow-left-solid.svg'
import whatsapp from './../../assets/whatsapp.svg'
import phone from './../../assets/phone-solid.svg'

const Header = (props) => {
  return (
    <div className='header p-5 px-10'>
        <img className='me-5' src={arrowLeftSolid} alt="" />
        <span>{props.title}</span>
        <div className='flex ms-auto gap-6'>
            <img src={whatsapp} alt="" />
            <img src={phone} alt="" />
        </div>
    </div>
  )
}

export default Header
