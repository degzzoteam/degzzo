"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white text-gray-800 px-6 py-24">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Hero Title */}
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-center leading-tight tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We’re Degzzo  
          <span className="block text-indigo-600">Transforming Global Design</span>
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          className="text-lg sm:text-xl text-center max-w-4xl mx-auto text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Degzzo is a global design studio that crafts transformative digital experiences.
          We specialize in fintech, edtech, enterprise tools, and more—helping brands thrive in the digital age.
        </motion.p>

        {/* Key Sections */}
        <div className="grid md:grid-cols-3  md:gap-10 text-center">
          {[
            { title: " Our Vision", desc: "To elevate digital interactions with innovative, human-centered design." },
            { title: "Our Mission", desc: "Empowering businesses with scalable and strategic design solutions." },
            { title: "Our Values", desc: "Collaboration. Curiosity. Clarity. We prioritize impact-driven results." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3 text-indigo-700">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Banner Section */}
        {/* <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:w-1/2 rounded-xl shadow-lg">
            <Image
              src="/about/studio.jpg"
              alt="Degzzo Studio"
              width={600}
              height={400}
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2 space-y-5">
            <h2 className="text-3xl font-bold text-indigo-700">More Than a Studio—</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We’re a team of designers, engineers, and strategists shaping the future of digital experiences.
              Working with top brands globally, we craft solutions that drive innovation and impact.
            </p>
          </div>
        </motion.div> */}
      </div>

      {/* Meet the Team Section */}
      {/* <div className="bg-white text-gray-800 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-indigo-700">Meet Our Team</h2>
          <p className="text-gray-500 text-lg">The experts behind Degzzo’s creative success.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            { name: "Harish Ragul", role: "Founder & Design Director", image: "/team/ameet.jpg" },
            { name: "Indu Mathi", role: "Co-Founder & Strategy Lead", image: "/team/riya.jpg" },
            { name: "Dhanush Adithya", role: "Project Manager", image: "/team/leena.jpg" },
            { name: "Ashok Kumar", role: "UI Designer", image: "/team/nikita.jpg" },
            { name: "Deepak", role: "UX Designer", image: "/team/yash.jpg" },
            { name: "Dinesh Kumar", role: "Frontend Engineer", image: "/team/rohan.jpg" },
          ].map((member, i) => (
            <motion.div
              key={i}
              className="text-center bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-28 h-28 mx-auto mb-4 relative rounded-full overflow-hidden shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="object-cover rounded-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-indigo-700">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
}