import React from 'react'
import Header from './header/Header'
import Brands from './Brands/Brands'
import CarIntroduction from './carIntroduce/CarIntroduction'
import Notifications from './notifications/Notifications'
import HomeBlogs from './ReadAble/HomeBlogs'

function HomePage() {
  return (
    <div className="min-h-[500px] w-full text-white">
      <Header />
      <Brands />
      <CarIntroduction />
      <Notifications />
      <HomeBlogs />
    </div>
  )
}

export default HomePage