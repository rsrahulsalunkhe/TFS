import React from 'react'
import './style.scss'
import CommodityCard from '../../components/commodityCard/CommodityCard'
import NewsCard from '../../components/newsCard/NewsCard'
import bannerImg from './../../assets/banner.jpeg'
import chana from './../../assets/chana.jpg'
import matar from './../../assets/matar.jpg'
import Header from '../../components/header/Header'
import { useParams } from "react-router-dom";
import sentiment from './../../assets/sentiment.svg'
import timeline from './../../assets/timeline.svg'
import coverage from './../../assets/coverage.svg'
import seperatorLine from './../../assets/seperator-line.svg'
import HeroSection from '../../components/heroSection/HeroSection'

const Categories = () => {
  const { categorieType } = useParams()
  return (
    <div className='lg:mx-[200px] text-center'>
        <Header />

        <div className='mx-2'>
          <HeroSection />

          <div className='flex justify-center pt-6'>
            <img className='lg:w-[50%] w-[80%]' src={seperatorLine} alt="" />
          </div>

          <div className='image-container'>
            <div className='header-title'>
              <span className='title'>This is title</span>
              <span className='sub-title'>This is sub title</span>
            </div>
            <div className='imgCard lg:flex gap-[2%]'>
              <img className='lg:w-[32%]' src={bannerImg} alt="" />
              <img className='lg:w-[32%]' src={bannerImg} alt="" />
              <img className='lg:w-[32%]' src={bannerImg} alt="" />
              <img className='lg:w-[32%]' src={bannerImg} alt="" />
            </div>
          </div>

          <div className='news-container gap-[2%]'>
            <div className='header-title'>
              <span className='title'>This is title</span>
              <span className='sub-title'>This is sub title</span>
            </div>
            <NewsCard categorie={categorieType} />
            <NewsCard categorie={categorieType} />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>

          <div className='load-btn py-3 lg:mx-[400px]'>LOAD MORE REPORTS</div>
        </div>
    </div>
  )
}

export default Categories
