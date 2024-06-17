import React from 'react'
import './style.scss'
import arrowLeftSolid from './../../assets/arrow-left-solid.svg'
import whatsapp from './../../assets/whatsapp.svg'
import phone from './../../assets/phone-solid.svg'
import CommodityCard from '../../components/commodityCard/CommodityCard'
import NewsCard from '../../components/newsCard/NewsCard'
import bannerImg from './../../assets/banner.jpeg'
import chana from './../../assets/chana.jpg'
import matar from './../../assets/matar.jpg'
import Header from '../../components/header/Header'
import { useParams } from "react-router-dom";

const Categories = () => {
  const { categorieType } = useParams();
  return (
    <div>
        <Header title={categorieType} />

        <div className='px-1'>
          <div className='flex gap-10 mt-5 lg:justify-start justify-center'>
            <div className='side-img lg:block'>
              <img className='w-full h-full' src={chana} alt="" />
            </div>

            <div className='flex flex-col'>
              <div className='title'><span>Everything here is Chana Excusive</span></div>
              <div className='mt-8' style={{fontSize: "20px"}}><span><b>Premium</b> Member Offers for you</span></div>
              <div className='w-full'><p style={{fontSize: "12px"}}><b>Up to 50% extra off on crores of products using supercoins
              </b></p></div>

              <div className='card-container'>
                <CommodityCard img='' title='Chana Sentiments' pageType='sentiment' categorie='chana' btnname='Check' />
                <CommodityCard img='' title='Chana Time Line' pageType='time-line' categorie='chana' btnname='Detail' />
                <CommodityCard img='' title='Chana Coverage' pageType='coverage' categorie='chana' btnname='Read' />
              </div>
            </div>
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
        </div>
    </div>
  )
}

export default Categories
