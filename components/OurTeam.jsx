"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

// const team = [
//   {
//     name: "sara",
//     role: "Designers",
//     photo: "/images/our-team/Designers.webp",
//     link: "/team/sara",
//     description: "Crafts intuitive interfaces with a flair for modern aesthetics.",
//   },
//   {
//     name: "mila",
//     role: "VFX Artists",
//     photo: "/images/our-team/VFX.webp",
//     link: "/team/mila",
//     description: "Connects users and devs with clear, strategic product direction.",
//   },
//   {
//     name: "omar",
//     role: "Video Post House Team",
//     photo: "/images/our-team/VIDEO-HOUSE.webp",
//     link: "/team/omar",
//     description: "Our expert video editing team transforms raw footage into compelling visual stories that captivate and engage.",
//   },
//   {
//     name: "leo",
//     role: "Developer",
//     photo: "/images/our-team/Developer.webp",
//     link: "/team/leo",
//     description: "Builds scalable web apps with clean, reusable code patterns.",
//   },
// ];

export default function SuperOurTeamSection() {
  return (
    <section className="bg-gray-50 py-10 px-4 xl:px-40">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        Meet the Minds Behind the Magic
        </motion.h2>
          <div className="">
            <motion.a
              
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className=" transform hover:-translate-y-2 transition cursor-pointer"
            >
              <div className="flex xl:flex-row flex-col xl:gap-10 items-center justify-between">
                <Image src="/images/backround/our-team.webp" alt="People working" width={400} height={500} />
                <div className="h-full xl:text-xl">
                  At the heart of our design studio is a team of passionate creatives, strategists, and problem-solvers who believe that great design isn’t just about how things look—it’s about how they work, feel, and connect. Each member of our team brings a unique perspective, a sharp eye for detail, and a relentless drive to turn ideas into impactful visual experiences.
                  We’re not just designers—we’re storytellers, brand-builders, and digital architects. Whether it’s crafting a bold new identity, designing intuitive user interfaces, or creating scroll-stopping visuals, we collaborate closely to bring your vision to life with clarity and style.
                  Together, we’re building more than just beautiful things—we’re building brands that resonate.

                </div>
                
              </div>

            </motion.a>

            
            {/* Add more team members here following the same structure */}
          </div>


      </div>
    </section>
  );
}
