"use client";
import Header from './Components/Header'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3';
import Footer from './Components/Footer';
import { useEffect } from 'react';

export default function Home() {
  return (
    <>
      {/* <div style={{ position: 'absolute', left: '0', top: '0', zIndex: '10'}}>
        <img src="/Images/Desktop.png" style={{ opacity: '0.6'}} alt="" />
      </div> */}
      <main className="flex min-h-screen flex-col items-center justify-start relative">
        <Header />
        <div className="w-full flex-column justify-center">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
        <Footer />
      </main>
    </>
  )
}
