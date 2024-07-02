
import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'
import About from '../pages/About'



function Routers() {
  return (
    <Routes>
        <Route path='/' element = {<Navigate to ='/home'/>} />
        <Route path='/home' element = {<Home/>} />
        <Route path='/tours' element = {<Tours/>} />
        <Route path='/tour/:id' element = {<TourDetails/>} />
        <Route path='/login' element = {<Login/>} /> 
        <Route path='/register' element = {<Register/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/thank-you' element = {<ThankYou/>} />
        <Route path='/tour/search/getTourBySearch' element = {<SearchResultList/>} />
    </Routes>
  )
}

export default Routers 