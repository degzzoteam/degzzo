"use client";

import { useState, useEffect, useRef } from "react";
import { MdOutlineNavigateBefore, MdNavigateNext } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Cloud Hub",
    description: "A modern responsive website for a creative agency with branding and animations.",
    image: "/images-s/1600-X-900-service.png",
    link: "/projects/creative-agency",
  },
  {
    title: "Msmappillai",
    description: "A scalable and fast e-commerce experience built with Next.js and Shopify.",
    image: "/images-s/1600-X-900-service.png",
    link: "/projects/ecommerce-platform",
  },
  {
    title: "SmartSalem",
    description: "A mobile-first UI dashboard built for product analytics and tracking.",
    image: "/images-s/1600-X-900-service.png",
    link: "/projects/mobile-dashboard",
  },
];

export default function ViewProjects() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null); // Store interval in ref

  // Auto slide every 10 seconds
  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % projects.length);
      }, 8000);
    };

    const stopAutoSlide = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    startAutoSlide();

    return () => stopAutoSlide();
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  return (
    <section className="py-5 mx-auto relative">
      <div
        className="relative h-80 rounded-xl overflow-hidden"
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={() => {
          intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % projects.length);
          }, 10000);
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 1, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full h-full bg-white shadow-md"
          >
            <div className="relative w-full h-full bg-cover bg-center rounded-xl overflow-hidden" style={{ backgroundImage: `url(${projects[current].image})` }}>
              <div className="bg-white absolute bottom-0 m-4 p-4 rounded-xl opacity-90">
                <h3 className="text-xl font-semibold">{projects[current].title}</h3>
                <p className="text-sm mt-2">{projects[current].description}</p>
                <Link href={projects[current].link} className="inline-block text-sm font-medium mt-2 text-blue-600">
                  View Project
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-300 border-solid border-black border-2 p-2 rounded-full shadow hover:bg-gray-100"
          aria-label="Previous Project"
        >
          <MdOutlineNavigateBefore />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 border-solid border-black border-2 rounded-full shadow hover:bg-gray-100"
          aria-label="Next Project"
        >
          <MdNavigateNext />
        </button>
      </div>
    </section>
  );
}