"use client";
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3';
import MainLayout from './Pages/MainLayout';
import { getData } from './Utils/getData';

export default function Home() {
  getData('categories');
  return (
    <>
      {/* <div style={{ position: 'absolute', left: '0', top: '0', zIndex: '10'}}>
        <img src="/Images/Desktop.png" style={{ opacity: '0.6'}} alt="" />
      </div> */}
      <main className="flex min-h-screen flex-col items-center justify-start relative">
        <MainLayout>
          <div className="w-full flex-column justify-center">
            <Section1 />
            <Section2 />
            <Section3 />
          </div>
        </MainLayout>
      </main>
    </>
  )
}
