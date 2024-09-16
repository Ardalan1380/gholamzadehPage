"use client"
import Image from "next/image";
import React, { useRef } from 'react'
import HomePage from "./components/template/HomePage";
import Navbar from "./components/layout/Navbar";
import PhoneNumbers from "./components/module/PhoneNumbers";
import Address from "./components/module/Address";
import Instagram from "./components/module/Instagram";
import AboutUs from "./components/module/AboutUs";

export default function Home() {

  const address = useRef(null);
  const googleMap = useRef(null);
  const website = useRef(null);
  const callUs = useRef(null);
  const instagram = useRef(null);
  const aboutUs = useRef(null);

  

  const handleScroll = (section) => {
    switch (section) {

      case 'address':
        address.current.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'googleMap':
        googleMap.current.scrollIntoView({ behavior: 'smooth' });
        break;
      
      case 'website':
        website.current.scrollIntoView({ behavior: 'smooth' });
        break;

      case 'callUs':
        callUs.current.scrollIntoView({ behavior: 'smooth' });
        break;

        case 'instagram':
          instagram.current.scrollIntoView({ behavior: 'smooth' });
        break;

        case 'aboutUs':
        aboutUs.current.scrollIntoView({ behavior: 'smooth' });
        break;

      default:
        break;
    }
  }
  return (
    <div className="flex flex-col justify-between mx-auto w-[430px] min-h-[800px] mt-[130px]">
      
      <HomePage onLinkClick={handleScroll} />
      <div className="flex mx-auto" ref={callUs}>
      <PhoneNumbers />
      </div>

      <div className="flex mx-auto" ref={address}>
      <Address />
      </div>

      <div className="flex mx-auto" ref={instagram}>
        <Instagram />
      </div>
      <div ref={aboutUs}>
      <AboutUs />
      </div>

    </div>
  );
}
