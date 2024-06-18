import React from 'react'
import './style.scss'
import whatsapp from './../../assets/whatsapp.svg'
import dialer from './../../assets/dialer.svg'
import leftArrow from './../../assets/left-arrow.svg'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const navigate = useNavigate()
  return (
    <div className='header ps-5'>
      <img onClick={() => navigate(-1)} src={leftArrow} alt="" />
      <span>{props.title}</span>
      <div className='flex ms-auto icons'>
          <img src={whatsapp} alt="" />
          <img src={dialer} alt="" />
      </div>
    </div>
  )
}

export default Header
