"use client";
import { useState } from 'react';
import { useEffect } from "react";



import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from "react-icons/fi";
import Cname from '../public/degzzo-logo-web.png';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
  if (isMenuOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}, [isMenuOpen]);



  return (
    <>
      <header className='bg-white text-black'>
        <div className="max-w-7xl mx-auto">
            <div className="scheme-light-dark   pt-10 pb-10 rignt-0 w-auto md:px-10 xl:px-30 flex items-center justify-between">
              <Link href="/" passHref>
                <Image src={Cname} loading="lazy" priority={false} alt="Company Logo" className="w-40 xl:w-60 transition hover:-translate-y-2 h-auto ml-3" />
              </Link>
              <div className='flex gap-10'>
                <ul className='hidden md:flex items-center gap-4 xl:gap-8 text-md xl:text-xl'>
                  <li><Link href="/ourservice"><div  className=" hover:text-blue-600 transition hover:-translate-y-1">Our Service </div></Link></li>
                  <li><Link href="/industries"><div className=" hover:text-blue-600 transition hover:-translate-y-1">Industries </div></Link></li>
                  <li><Link href="/ourwork"><div className="hover:text-blue-600 transition hover:-translate-y-1 ">Our Work</div></Link></li>
                  <li><Link href="/careers"><div className="hover:text-blue-600 transition hover:-translate-y-1 ">Careers</div></Link></li>
                  <li><Link href="/about"><div className="hover:text-blue-600 transition hover:-translate-y-1">About</div></Link></li>
                  <li><Link href="/joinus"><div className="text-[#ff00aa] transition hover:-translate-y-1">Let's Talk</div></Link></li>
                </ul>
                {/* <div className="w-10 h-10 hidden md:flex items-center justify-center  text-3xl hover:text-blue-600">
                  <Link href="/client-login"><button className=" flex items-center justify-center  ml-10 border rounded-xl text-xl px-6  transition hover:-translate-y-1">login</button></Link>
                </div> */}
                <div
                  className={`w-10 h-10 flex md:hidden items-center justify-center mr-10 text-3xl hover:text-blue-600 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <FiX /> : <FiMenu />}
                </div>
              </div>
        </div>
        {/* Mobile Menu */}
          <div className={`absolute z-50  mx-auto left-0 w-full h-full bg-[#c756b4] gap-8 transition-all duration-500 ease-in-out overflow-y-auto ${isMenuOpen ? 'top-0' : '-top-full'}`}>
            <div className="">
                <div className="absolute  top-10 right-10 xl:top-12 xl:right-40  text-3xl text-white"><div onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer"><FiX /></div></div>
          <div className="flex flex-col xl:flex-row h-screen"> 
                <div className="w-full xl:w-1/2 flex  pt-20 xl:pt-30 bg-[#8b9ffc] ">
                <div className="flex gap-10 h-full justify-between itea-center xl:items-start">
                     {/* Left Section (Menu Lists) */}
                  <ul className="xl:gap-6 text-2xl xl:text-2xl m-2 pl-6 xl:pl-10 flex flex-col font-bold text-white">
                    <li>
                      <Link href="/ourservice">
                        <div className="flex items-center p-2" onClick={() => setIsMenuOpen(false)}>
                          Our Service
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries">
                        <div className="flex items-center p-2" onClick={() => setIsMenuOpen(false)}>
                          Industries
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ourwork">
                        <div className="p-2" onClick={() => setIsMenuOpen(false)}>Our Work</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers">
                        <div className="p-2" onClick={() => setIsMenuOpen(false)}>Careers</div>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/process">
                        <div className="flex items-center p-2" onClick={() => setIsMenuOpen(false)}>Process</div>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/about">
                        <div className="p-2" onClick={() => setIsMenuOpen(false)}>About</div>
                      </Link>
                    </li>
                  </ul>
                  <div className=" w-30  flex flex-col items-center justify-center">
                    <Link href="/" passHref>
                      <Image src={Cname} loading="lazy" priority={false} alt="Company Logo" className="w-40  transition hover:-translate-y-2 h-auto " />
                    </Link>
                     <h1 className='font-extrabold text-xl text-gray-100'>--Shaping bold ideas into stunning visual experiences</h1>
                     
                  </div>
                  </div>
                      {/* Right Section (Menu Lists) */}
                  <ul className="text-xl hidden xl:text-4xl  m-2 pl-6 xl:pl-10 pt-3 xl:flex flex-col font-poppins font-light text-white">
                    {/* <li>
                      <Image 
                        src="/images/call-action/call-action-01.webp" 
                        alt="Call to action icon"
                        width={300}
                        height={300}
                        className="mb-2"
                      />
                    </li> */}
                    {/* <li>
                      <Link href="/process">
                        <div className="flex items-center p-2" onClick={() => setIsMenuOpen(false)}>Process</div>
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/careers">
                        <div className="flex items-center p-2" onClick={() => setIsMenuOpen(false)}>Careers</div>
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/Blogs">
                        <div className="p-2" onClick={() => setIsMenuOpen(false)}>Blogs</div>
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/">
                        <div className="p-2" onClick={() => setIsMenuOpen(false)}>Whitepapers</div>
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link href="/Joinus">
                        <div className="p-2" onClick={() => setIsMenuOpen(false)}>Contact Us</div>
                      </Link>
                    </li> */}
                  </ul>
                </div> 
                      {/* CloseB & share Section */}
                <div className="flex  justify-between xl:w-1/2 xl:p-5 text-white xl:pt-35 text-4xl font-bold">
                <div className="flex flex-col pl-5 py-5  h-100">
                  <div className="flex flex-col justify-between gap-5">
                      <div className="font-poppins  font-bold">
                        Got An Idea?
                      </div>
                      <div className="font-poppins ">
                        Let's craft
                      </div>
                      <div className="font-poppins ">
                        brilliance together!
                      </div>
                      {/* <div className="text-3xl hover:text-blue-600">
                        <Link href="/client-login"><button onClick={() => setIsMenuOpen(false)} className="bg-blue-300 text-white rounded-xl text-xl px-10 py-1">login</button></Link>
                      </div> */}
                      <div onClick={() => setIsMenuOpen(false)} >
                        <button className=" hover:bg-[#86447b] text-whirt py-2 px-10 text-xl xl:px-16 border-2  rounded-full" onClick={() => window.open("https://wa.me/9385750767?text=Hi%20Degzzo%0ACan%20Meeting" , "hii Degzzo")}>
                          Let's talk
                        </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm sm:text-xl pt-5 xl:pt-10 font-semibold">
                    <Link href="https://www.instagram.com/degzzo?igsh=a2pyM210enZ4c24y" className="hover:text-black  transition">Instagram</Link>
                    <Link href="https://www.linkedin.com/company/degohub/" className="hover:text-gray-600 transition">LinkedIn</Link>
                    <Link href="https://x.com/Harishragul06?t=rUUE-UnI6J6OcX0E8WRPlA&s=09" className="hover:text-gray-600 transition">X</Link>
                    <Link href="https://wa.me/qr/C3U7YQGSIYLUG1" className="hover:text-gray-600 transition">WhatsApp</Link>
                    <Link href="/careers" className="hover:text-gray-600 transition">Careers</Link>
                    </div>
                 </div>
                  
                </div>
          </div>
          </div>
          </div>
          </div>
      </header>
    </>
  );
}

export default Header;