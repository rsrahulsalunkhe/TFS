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
        {/* <div className='header p-5 px-10'>
            <img className='me-5' src={arrowLeftSolid} alt="" />
            <span className=''>CHANA</span>
            <div className='flex ms-auto gap-6'>
                <img className='' src={whatsapp} alt="" />
                <img className='' src={phone} alt="" />
            </div>
        </div> */}
        <Header title={categorieType} />

        <div className='px-5'>
          <div className='flex gap-10 justify-center mt-5'>
            <div className='side-img lg:block'>
              <img className='w-full h-full' src={chana} alt="" />
            </div>

            <div>
              <div className='title'><span>Everything here is Chana Excusive</span></div>
              <div className='mt-8' style={{fontSize: "20px"}}><span><b>Premium</b> Member Offers for you</span></div>
              <div className=''><p>Up to 50% extra off on crores of products using supercoins
              </p></div>

              <div className='card-container'>
                <CommodityCard img='' title='Chana Sentiments' pageType='sentiment' categorie='chana' btnname='Check' />
                <CommodityCard img='' title='Chana Time Line' pageType='time-line' categorie='chana' btnname='Detail' />
                <CommodityCard img='' title='Chana Coverage' pageType='coverage' categorie='chana' btnname='Read' />
              </div>
            </div>
          </div>

          <div className='image-container'>
            <div className='imgCard lg:flex'>
              <img className='lg:w-[32%] mt-3' src={bannerImg} alt="" />
              <img className='lg:w-[32%] mt-3' src={bannerImg} alt="" />
              <img className='lg:w-[32%] mt-3' src={bannerImg} alt="" />
              <img className='lg:w-[32%] mt-3' src={bannerImg} alt="" />
            </div>
          </div>

          <div className='news-container gap-4'>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            {/* <NewsCard />
            <NewsCard /> */}
          </div>

          <div className='load-btn py-3 lg:mx-[400px]'>LOAD MORE REPORTS</div>
        </div>
    </div>
  )
}

export default Categories
