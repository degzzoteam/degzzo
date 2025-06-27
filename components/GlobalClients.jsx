"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const partners = [
  {
    name: "Partner A",
    slug: "partner-a",
    logos: [
      { src: "/clients/Degzzo-ms.webp", link: "/Partners/unique" },
      { src: "/clients/Degzzo-mw.webp", link: "/Partners/unique" },
    ],
    interval: 2000,
  },
  {
    name: "Partner B",
    slug: "partner-b",
    logos: [
      { src: "/clients/Degzzo-ns.webp", link: "/partners/unique" },
      { src: "/clients/Degzzo-uc.webp", link: "/partners/unique" },
    ],
    interval: 3000,
  },
  {
    name: "Partner C",
    slug: "partner-c",
    logos: [
      { src: "/clients/Degzzo-ymk.webp", link: "/partners/unique" },
      { src: "/clients/Degzzo-ms.webp", link: "/partners/unique" },
    ],
    interval: 2500,
  },
  {
    name: "Partner D",
    slug: "partner-d",
    logos: [
      { src: "/clients/Degzzo-ch.webp", link: "/partners/partner-d/logo1" },
      { src: "/clients/Degzzo-nht.webp", link: "/partners/partner-d/logo2" },
    ],
    interval: 4000,
  },
  {
    name: "Partner E",
    slug: "partner-e",
    logos: [
      { src: "/clients/Degzzo-nht1.webp", link: "/partners/partner-e/logo1" },
      { src: "/clients/Degzzo-uc.webp", link: "/partners/partner-e/logo2" },
    ],
    interval: 3500,
  },
  {
    name: "Partner F",
    slug: "partner-f",
    logos: [
      { src: "/clients/Degzzo-tb.webp", link: "/partners/partner-f/logo1" },
      { src: "/clients/Degzzo-rr.webp", link: "/partners/partner-f/logo2" },
    ],
    interval: 2200,
  },
  
  // ... same rest of your partners
];

export default function GlobalPartnerSection() {
  const [logoIndexes, setLogoIndexes] = useState(partners.map(() => 0));

  useEffect(() => {
    const intervals = partners.map((partner, i) =>
      setInterval(() => {
        setLogoIndexes((prev) => {
          const newIndexes = [...prev];
          newIndexes[i] = newIndexes[i] === 0 ? 1 : 0;
          return newIndexes;
        });
      }, partner.interval)
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="relative py-10 text-white">
      <div className="p-5 mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Global Clients
        </motion.h2>

        <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-10">
  {partners.map((partner, index) => {
    const activeLogo = partner.logos[logoIndexes[index]];
    return (
      <div
        key={index}
        className={`text-center ${
          ["Partner G", "Partner H"].includes(partner.name) ? "hidden md:block" : ""
        }`}
      >
        <div className="flex justify-center relative w-full max-w-[80px] sm:max-w-[130px] md:max-w-[100px] mx-auto ">
          <Link href={activeLogo.link}>
            <AnimatePresence mode="wait">
              <motion.img
                key={activeLogo.src}
                src={activeLogo.src}
                alt={partner.name}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-auto object-cover  transition duration-300 cursor-pointer bg-white rounded-2xl p-2 shadow-lg hover:scale-105"
              />
            </AnimatePresence>
          </Link>
        </div>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}
