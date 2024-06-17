import { useState, useEffect } from "react"
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Categories from './pages/categories/Categories'
import PageNotFound from './pages/404/PageNotFound'
import './App.css'
import Sentiments from "./pages/sentiments/Sentiments"
import TimeLine from "./pages/time-line/TimeLine"
import Coverage from "./pages/coverage/Coverage"

function App() {

  return (
    <div className='text-center lg:mx-[200px] mb-5'>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categorie/:categorieType" element={<Categories />} />
            <Route path="sentiment/:categorieType" element={<Sentiments />} />
            <Route path="time-line/:categorieType" element={<TimeLine />} />
            <Route path="coverage/:categorieType" element={<Coverage />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
       </BrowserRouter>
    </div>
  )
}

export default App
