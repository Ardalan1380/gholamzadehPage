"use client"
import Image from "next/image";
import React, { useRef , useEffect } from 'react'
import PhoneNumbers from "../components/module/PhoneNumbers";
import Address from "../components/module/Address";
import Instagram from "../components/module/Instagram";
import AboutUs from "../components/module/AboutUs";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import HomePage from "@/components/template/HomePage/HomePage";
import BottomNav from "@/components/layout/BottomNav";

export default function Home() {
  const router = useRouter()
useEffect(() => {
    router.push("/contactUs")
},[])
  return(
    <div>
      {/* <Navbar />
      <HomePage />
      <BottomNav /> */}
    </div>
  )
}
