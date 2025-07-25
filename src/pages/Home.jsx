import React from "react";
import Hero from "../Components/Hero";
import PopularDishes from "../Components/PupolerD";
import Navbar from "../Components/Navbar";
import Gallery from "../Components/Gellery";
import Testimonial from "../Components/Testimonial";


export default function Home() {
  return (
    <>
    <div className="h-[100vh] bg-cover"  style={{ backgroundImage: "url('./images/bg3.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 grayscale via-black/40 to-black/20 z-0"></div>
      <Navbar/>
      <Hero/>
         </div>

      <PopularDishes/>
    <Testimonial/>
      <Gallery/>
    

    </>
  );
}
