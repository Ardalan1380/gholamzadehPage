"use client"
import AboutUs from "@/components/module/AboutUs";
import Address from "@/components/module/Address";
import Instagram from "@/components/module/Instagram";
import PhoneNumbers from "@/components/module/PhoneNumbers";
import ContactUsPage from "@/components/template/contactUs/ContactUsPage";
import Image from "next/image";
import React , {useRef} from 'react'



function ContactUs() {
    
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
    <div className="flex flex-col justify-between mx-auto w-[390px] min-h-[800px] mt-[180px]">
      
      <ContactUsPage onLinkClick={handleScroll} />

      <div>
        
      </div>

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
  )
}

export default ContactUs