'use client';

import Link from 'next/link';

import RotatingText from '../../components/RotatingTextF';
import HoverTouchVideoGrid from '../../components/HoverTouchVideoGrid'
import GlobalClients from "../../components/GlobalClients";
import Review from '../../components/Review';
import OurTeam from '../../components/OurTeam'
import HomeEmailForm from "../../components/HomeEmailForm";

import { PackageSearch,Store,PencilRuler,MonitorCog,BrainCog } from 'lucide-react';

function Home() {
  return (
    <>
      <div className="font-handre"> 
        <div className="max-w-7xl mx-auto ">
          <div className="mx-5 xl:mx-40 flex xl:flex-row flex-col gap-10  items-center justify-between">
              <div className="relative xl:w-1/2">
                  <div className="text-3xl sm:text-5xl xl:text-5xl tracking-wide leading-[1.5]  font-boldonse"><a className="font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">G</a>lobal-Class Design Company</div>
                  <h1   className='absolute pt-5 xl:pt-6 right-0 xl:left-0 font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'>THE DESIGN PARTNER</h1>
              </div>
              <div className=" xl:w-1/2 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                // controls
                poster="/images/video-cover.jpg"
                className="h-70 object-cover object-bottom"
                onError={(e) => console.error('Video error:', e)}
              >
                <source src="/videos/1000X1200-logo-v-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex  text-2xl pb-5 xl:pb-0 md:text-4xl ">
                      <div className="">Creative</div>
                      <div className="px-2 ml-1 text-purple-500 rounded-md ">
                        <RotatingText  
                          texts={[
                            "Hello, World!",
                            "React is Awesome!",
                          ]}
                          rotationInterval={2000}
                          />
                    </div>
                  </div>
            </div>
          </div>
        </div>
          {/* About */}
          <div className="bg-[#ff9100] bg-[url(/images/backround/home-about.webp)] xl:mt-20 mt:10 text-white py-10 h-90
          bg-cover bg-center">
            <div className="max-w-7xl mx-auto ">
              <div className="mx-5 xl:mx-40">
            <h1 className='text-xl xl:text-4xl font-poppins font-bold text-center pb-5'>&quot;Design is our language — we enhance engagement between brands and people.&quot;</h1>
            <p className='xl:mx-20 text-xs xl:text-[16px] text-center mt-10'>At Degzzo, we specialize in delivering end-to-end creative solutions that blend design innovation with digital excellence.Whether you&apos;re a startup, an established business, or a content creator , we help you tell your story with clarity, creativity, and consistency across all digital touchpoints.</p>
            <p className='text-[#ff9100] text-center mt-10'>5+ Years. 25+ Clients.</p>
            
            </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto text-center  pt-20">
            <div className="mx-5 xl:mx-40">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Our Services</div>
              <div className="pt-3 text-xl  md:text-xl">We create beautiful digital products & branding that your customers will love and we do a whole lot more.</div>
                <div className="pt-4 flex flex-wrap justify-center xl:gap-10 text-base sm:text-xl xl:text-4xl">
                    {/* First Row */}
                    <div className="flex flex-wrap gap-5 justify-center">
                      <Link href="/ourservice"><div className="flex flex-col items-center p-2 px-2 xl:px-6 rounded-2xl  transition hover:-translate-y-2 hover:text-[#ff9100]">Design<div className="pt-2"><PackageSearch className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /></div></div></Link>
                      <Link href="/ourservice#3d"><div className="flex flex-col items-center p-2 px-4 xl:px-6 rounded-2xl  transition hover:-translate-y-2 hover:text-[#ff9100]">3D & VFX<div className="pt-2"><Store className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /></div></div></Link>
                      <Link href="/ourservice#Build"><div className="flex flex-col items-center p-2 rounded-2xl  transition hover:-translate-y-2 hover:text-[#ff9100]">Websites<div className="pt-2"><MonitorCog className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /> </div></div></Link>
                    </div>
                    {/* 2 Row */}
                    <div className="flex flex-wrap gap-5 justify-center">
                      <Link href="/ourservice#videoEditing"><div className="flex flex-col items-center p-2 rounded-2xl  transition hover:-translate-y-2 hover:text-[#ff9100]"><div>Videos</div><div className="pt-2"><PencilRuler className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /></div></div></Link>
                      <Link href="/ourservice#ai"><div className="flex flex-col items-center p-2 rounded-2xl  transition hover:-translate-y-2 hover:text-[#ff9100]"><div>AI Design</div><div className="pt-2"><BrainCog className="w-16 h-16 sm:w-20 sm:h-20 xl:w-[100px] xl:h-[100px]" strokeWidth={1} /></div></div></Link>
                    </div>
                </div>
            </div>
          </div>
                          

          <div className=" text-center pt-20">
            <div className="max-w-6xl mx-auto">
                <div className="mx-5 xl:mx-40">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Visual Wins</div>
                  <div className="pt-3 text-xl  md:text-2xl">We partner with start-ups to corporates, creating, or elevating their digital needs.</div>
                </div>
                <HoverTouchVideoGrid/>
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="mx-2 xl:mx-[190px]">
            <div className="2xl:mx-3 my-10 text-center">
              <h1 className="text-3xl sm:text-2xl xl:text-4xl font-bold ">Ready to level up your look with a great design?</h1>
              <p className='xl:text-xl '>We’re a creative studio turning bold ideas into beautiful, functional design.
              From branding to digital experiences, we craft with purpose and precision.
              Design isn’t just what we do — it’s how we help you stand out.
              </p>
              
              <div className="flex justify-center mt-10">
                <button
                  className=" py-2 px-10 text-xl xl:px-16 border-2 rounded-full"
                  onClick={() =>
                    window.open(
                      "https://wa.me/7708460702?text=Hi,%20I%20have%20a%20few%20questions%20about%20working%20with%20your%20team.",
                      "_blank"
                    )
                  }
                >
                  Let&rsquo;s talk
                </button>
              </div>
        </div>
          </div>
          </div>
      </div>
      <div className="pt-10">
        <div className=" bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className=" mx-5 xl:mx-50">
          <GlobalClients/>
          </div>
        </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="mx-5 xl:mx-50">
          <HomeEmailForm/>
        </div>
      </div>
      
      <Review/>
      <OurTeam/>

      
      {/* <div className="2xl:mx-30">
      <HomeResultImage2/>
      </div> */}
    </>
  );
}

export default Home;