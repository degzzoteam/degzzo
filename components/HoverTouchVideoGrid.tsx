"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // ✅ Add this

const videoItems = [
  {
    id: 1,
    image: "/images/ourresults/macro-wealth.webp",
    video: "/videos/1000X1200-logo-v.mp4",
    title: "Poster & Logo Reveal",
    link: "/projects/logo-reveal",
  },
  {
    id: 2,
    image: "/images/ourresults/rr-enterprises.webp",
    video: "/videos/1000X1200-logo-v.mp4",
    title: "Motion Identity",
    link: "/projects/motion-identity",
  },
  {
    id: 3,
    image: "/images/ourresults/cloudhub.webp",
    video: "/videos/1000X1200-logo-v.mp4",
    title: "3D Branding",
    link: "/projects/3d-branding",
  },
  {
    id: 4,
    image: "/images/ourresults/nila-healthy.webp",
    video: "/videos/1000X1200-logo-v.mp4",
    title:  "Branding & Identity",
    link: "/projects/3d-branding",
  },
  {
    id: 5,
    image: "/images/ourresults/itechzz.webp",
    video: "/videos/1000X1200-logo-v.mp4",
    title: "personal branding",
    link: "/projects/3d-branding",
  },

  {
    id: 6,
    image: "/images/ourresults/ms-mappillai.webp",
    video: "/videos/1000X1200-logo-v.mp4",
    title: "ui & ux design",
    link: "/projects/3d-branding",
  },
  
];

export default function HoverTouchVideoGrid() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section className=" pt-5 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mx-5 xl:mx-30 grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {videoItems.map((item, i) => (
            <Link href={item.link} key={item.id}>
              <motion.div
                className="w-[170px] xl:w-[280px] h-[300px] relative cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-lg"
                onMouseEnter={() => setPlayingIndex(item.id)}
                onTouchStart={() => setPlayingIndex(item.id)}
                onMouseLeave={() => setPlayingIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {playingIndex === item.id ? (
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}

                {/* Title overlay */}
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded z-10">
                  {item.title}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}