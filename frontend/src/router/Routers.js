import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'

import Home from '../pages/Home.jsx'
import Tour from '../pages/Tour.jsx'
import TourDetail from '../pages/TourDetail.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import SearchResultList from '../pages/SearchResultList.jsx'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='home' />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/tours" element={<Tour />}/>
      <Route path="/tours/:id" element={<TourDetail />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/tours/search" element={<SearchResultList />}/>
    </Routes>
  )
}

export default Routers