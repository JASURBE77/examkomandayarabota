import React from 'react'
import MainSwiper from '../components/Swiper'
import Swayper2 from '../components/Swipertwo'
import Header from '../components/Header'
import Products from '../components/Products'
import HeaderNavbar from '../components/HeaderNavbar'

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderNavbar />
      <MainSwiper />
      <Swayper2 />
      <Products />
    </div>
  )
}

export default Home
