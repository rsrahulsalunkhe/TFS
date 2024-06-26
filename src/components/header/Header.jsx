import React from 'react'
import './style.scss'
import whatsapp from './../../assets/whatsapp.svg'
import dialer from './../../assets/dialer.svg'
import leftArrow from './../../assets/left-arrow.svg'
import { useNavigate, useParams } from 'react-router-dom'

const Header = (props) => {
  const navigate = useNavigate()
  const { categorieType } = useParams()
  return (
    <div className='header ps-5'>
      {props.title != 'home' && <img onClick={() => navigate(-1)} src={leftArrow} alt="" />}
      <div className='flex flex-col text-left' style={{lineHeight: 1}}>
        <span>{categorieType}</span>
        {(props.title != 'categorie' && props.title != 'home')  && <span style={{fontSize: '20px', textTransform: 'capitalize'}}>{props.title}</span>}
        {props.title == 'home'  && <span style={{fontSize: '20px', textTransform: 'capitalize'}}>{props.title}</span>}
      </div>
      <div className='flex ms-auto icons'>
          <img src={whatsapp} alt="" />
          <img style={{width: '18px'}} src={dialer} alt="" />
      </div>
    </div>
  )
}

export default Header
