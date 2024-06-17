import React from 'react'
import './style.scss'
import { useNavigate } from "react-router-dom";

const CommodityCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className='card'>
      <div className='circle'><img src={props.img} alt="" /></div>
      <div className='card-title'>{props.title}</div>
      <div className='btn' onClick={() => navigate(`/${props.pageType}/${props.categorie}`)}>{props.btnname + " >"}</div>
    </div>
  )
}

export default CommodityCard
