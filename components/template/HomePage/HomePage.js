"use client"
import React , {useState , useEffect} from 'react'
import Header from './header/Header'
import Brands from './Brands/Brands'
import CarIntroduction from './carIntroduce/CarIntroduction'
import Notifications from './notifications/Notifications'
import HomeBlogs from './ReadAble/HomeBlogs'
import MobileNotidications from './notifications/mobileNotidications/MobileNotidications';

function HomePage() {
  const [width , setWidth] = useState(null)
  useEffect(() => {
      const handleResize = () => {
          setWidth(window.innerWidth);
      }
      handleResize()
      window.addEventListener("resize" , handleResize);
      return () => {
          window.removeEventListener("resize" , handleResize)
      }
  } , []);
  return (
    <div className="min-h-[500px] w-full text-white">
      <Header />
      <Brands />
      {
        width > 800 ? 
        <CarIntroduction />
        : null
      }
      {
        width < 800 ?  
        <MobileNotidications />
        : null
      }
      {
        width > 800 ? 
         <Notifications /> 
         : null
      }
      {
        width < 800 ? 
        <CarIntroduction />
        : null
      }
      <HomeBlogs />
    </div>
  )
}

export default HomePage