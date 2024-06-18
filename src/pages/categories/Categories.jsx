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

const Categories = () => {
  const { categorieType } = useParams();
  return (
    <div>
        <Header title={categorieType} />

        <div className='px-2'>
          <div className='lg:flex lg:mt-5 lg:gap-10 lg:justify-start'>
            <div className='side-img lg:block'>
              <img className='w-full h-full' src={chana} alt="" />
            </div>

            <div className='flex flex-col'>
              <div className='title'><p>Everything here is Chana Excusive</p></div>
              <div className='mt-3' style={{fontSize: "15px", fontWeight: 500}}><span><i style={{fontWeight: 800}}>Premium</i> Member Offers for you</span></div>
              <div className='w-full'><p style={{fontSize: "11px", fontWeight: 500}}><b>Up to 50% extra off on crores of products using supercoins
              </b></p></div>

              <div className='card-container'>
                <CommodityCard img={sentiment} title='sentiments' pageType='sentiment' categorie='chana' btnname='Check' />
                <CommodityCard img={timeline} title='time Line' pageType='timeline' categorie='chana' btnname='Detail' />
                <CommodityCard img={coverage} title='coverage' pageType='coverage' categorie='chana' btnname='Read' />
              </div>
            </div>
          </div>

          <div className='flex justify-center pt-6'>
            <img className='lg:w-[50%] w-[80%]' src={seperatorLine} alt="" />
          </div>

          <div className='image-container'>
            <div className='header-title'>
              <span>This is title</span>
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
              <span>This is title</span>
            </div>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>

          <div className='load-btn py-3 lg:mx-[400px]'>LOAD MORE REPORTS</div>

          {true ? <h1>Rahul</h1> : <p>Salunkhe</p>}
        </div>
    </div>
  )
}

export default Categories
