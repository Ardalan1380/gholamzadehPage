import Address from '@/components/module/AboutUs/Address'
import ContactUs from '@/components/module/AboutUs/ContactUs'
import Details from '@/components/module/AboutUs/Details'
import Header from '@/components/module/AboutUs/Header'
import Instagram from '@/components/module/AboutUs/Instagram'
import React from 'react'

function AboutUsPage() {
  return (
    <div>
        <Header />  
        <Details />
        <ContactUs />
        <Address />
        <Instagram />
    </div>
  )
}

export default AboutUsPage