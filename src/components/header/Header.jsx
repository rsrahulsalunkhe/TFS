import React from 'react'
import './style.scss'
import arrowLeftSolid from './../../assets/arrow-left-solid.svg'
import whatsapp from './../../assets/whatsapp.svg'
import phone from './../../assets/phone-solid.svg'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const navigate = useNavigate()
  return (
    <div className='header p-5 px-5 mb-3'>
        <img onClick={() => navigate(-1)} src={arrowLeftSolid} alt="" />
        <span>{props.title}</span>
        <div className='flex ms-auto gap-6'>
            <img src={whatsapp} alt="" />
            <img src={phone} alt="" />
        </div>
    </div>
  )
}

export default Header
