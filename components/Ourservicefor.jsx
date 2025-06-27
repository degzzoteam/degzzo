"use client";

import { useState } from "react";

const sections = {
  corporates: {
    title: "For Corporates / Agencies",
    items: [
      {
        heading: "Design / Website",
        sub: "Brand-Driven Visual Identity",
        desc: "We create elegant and consistent design systems that reflect the brand's legacy and scalability needs.",
      },
    ],
  },
  startups: {
    title: "For Startups",
    items: [
      {
        heading: "Design / Website",
        sub: "Lean MVP Design",
        desc: "Rapid wireframes and product flows to validate ideas and impress investors within weeks.",
      },
    ],
  },
  personal: {
    title: "For Personal Branding",
    items: [
      {
        heading: "Design / Website",
        sub: "Authentic Visual Identity",
        desc: "We help build a digital presence aligned with your voice, purpose, and values.",
      },
    ],
  },
  creators: {
    title: "For Content Creators",
    items: [
      {
        heading: "Design / Website",
        sub: "Content-First Branding",
        desc: "Thumbnails, cover art, overlays, and social kits designed to boost engagement.",
      },
    ],
  },
};

export default function WhoWeDesignForTabs() {

  return (
    <section className="w-full px-0 xl:px-6 mb-10 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-5 xl:mb-10">
          <h1 className="text-2xl xl:text-4xl font-bold text-center">We collaborate to build what truly matters.</h1>
        </div>

        {/* Navigation */}
        {/* <div className="w-full flex justify-center gap-2 xl:gap-4  mb-10">
          {Object.entries(sections).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`text-sm rounded-2xl px-3 xl:px-5 xl:text-base p-2 transition ${
                active === key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {value.title}
            </button>
          ))}
          
        </div> */}
        <div className="flex justify-center gap-2 xl:gap-4 mb-10">
          {Object.entries(sections).map(([key, value]) => (
            <div className=" text-sm rounded-2xl px-3 xl:px-5 xl:text-base p-2 transition bg-blue-600 text-white " key={key}>{value.title}</div>
          ))}
        </div>



        {/* Animated Content */}
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="iteam-center w-full "
          >
            {sections[active].items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl h-50 flex flex-col iteam-center text-center bg-[#F8F9FA] border border-gray-200 shadow-sm"
              >
                <h3 className="text-sm xl:text-lg font-semibold text-blue-700 mb-1">
                  {item.heading}
                </h3>
                <h4 className="text-sm xl:text-md font-medium mb-2">{item.sub}</h4>
                <p className=" text-sm xl:text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence> */}
      </div>
    </section>
  );
}
