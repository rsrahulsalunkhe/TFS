import React from 'react'
import './style.scss'
import { useNavigate } from "react-router-dom";
import sentiment from './../../assets/sentiment.svg'
import timeline from './../../assets/timeline.svg'
import coverage from './../../assets/coverage.svg'


const CommodityCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className='card lg:w-[32%]'>
      <div className='circle'><img src={props.img} alt={props.img} /></div>
      <div className='card-title'>{props.categorie}<br />{props.title}</div>
      <div className='btn' onClick={() => navigate(`/${props.pageType}/${props.categorie}`)}>{props.btnname + " >"}</div>
    </div>
  )
}

export default CommodityCard
