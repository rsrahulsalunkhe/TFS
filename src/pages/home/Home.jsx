import React from 'react'
import './style.scss'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <p onClick={() => navigate(`/categorie/chana`)}>Chana</p>
      <p onClick={() => navigate(`/categorie/matar`)}>Matar</p>
    </div>
  )
}

export default Home
