"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import Ourservicefor from '../../../components/Ourservicefor'


const designServices = [
  {
    title: "Digital Branding",
    desc: "Build impactful brand systems across digital platforms.",
  },
  // {
  //   title: "3D Branding Assets",
  //   desc: "Turn your logos, icons, or mascots into stunning 3D visuals.",
  // },
  // {
  //   title: "UI & UX DESIGN",
  //   desc: "Craft clean, scalable, and modern UI components.",
  // },
  // {
  //   title: "3D Animation",
  //   desc: "Create smooth, dynamic animations that explain, engage, and impress.",
  // },
  {
    title: "Motion Graphics",
    desc: "Animate your message to stand out in motion.",
  },
  // {
  //   title: "AR/VR Ready Models",
  //   desc: "Prepare assets optimized for WebGL, AR try-ons, or immersive demos.",
  // },
  
  // {
  //   title: "Digital Illustrations",
  //   desc: "Custom illustrations that reflect your brand's tone.",
  // },
  {
    title: "3D Product Visualization",
    desc: "Showcase your product with photorealistic, interactive 3D renders.",
  },
  {
    title: "Intelligent Design",
    desc: "Merge creative with AI to build adaptive systems.",
  },
];

const videoServices = [
  // {
  //   title: "Video Editing",
  //   desc: "Crisp, engaging edits that bring your story to life for any platform.",
  // },
  {
    title: "Motion Graphics",
    desc: "Engaging text, icons, and animations designed to captivate and inform your audience.",
  },
  {
    title: "2D Animation",
    desc: "Custom illustrated animations ideal for explainer videos, brand intros, and visual storytelling.",
  },
  {
    title: "Reels & Shorts",
    desc: "Fast-paced, trend-driven edits crafted for platforms like Instagram, YouTube Shorts, and TikTok.",
  },
  // {
  //   title: "Product Videos",
  //   desc: "Polished videos that show off features, benefits, and value.",
  // },
  {
    title: "Corporate   Brand Films",
    desc: "Polished, narrative-driven videos that elevate internal communications and brand marketing.",
  },
];


const buildServices = [
  {
    title: "Front-End Development",
    desc: "Pixel-perfect, performant websites with React and modern frameworks.",
  },
  {
    title: "Web Applications",
    desc: "Custom platforms built to scale with your business.",
  },
  {
    title: "Mobile Applications",
    desc: "Cross-platform apps with seamless UX on iOS and Android.",
  },
  // {
  //   title: "Custom Applications",
  //   desc: "Tailored solutions built from the ground up.",
  // },
  {
    title: "SaaS Implementation",
    desc: "Launch or integrate Software-as-a-Service products.",
  },
  // {
  //   title: "CMS Integration",
  //   desc: "Flexible content management with WordPress, Sanity, or Strapi.",
  // },
];



const aiServices = [
  {
    title: "AI-Enhanced Branding",
    desc: "Leverage machine learning to create visually compelling, brand-aligned assets at speed and scale.",
  },
  {
    title: "Intelligent UX Prototyping",
    desc: "Generate user-centric prototypes informed by behavioral data and AI-driven wireframes.",
  },
  {
    title: "Generative Art & Visuals",
    desc: "Create stunning illustrations and dynamic visuals through AI-powered image synthesis and design models.",
  },
  // {
  //   title: "AI-Driven Content Creation",
  //   desc: "Accelerate content production—from layouts to social media creatives—using AI-assisted workflows.",
  // },
  // {
  //   title: "Custom Model Styling",
  //   desc: "Train or fine-tune AI models to produce unique visuals that reflect your brand identity and style guidelines.",
  // },
];

const vfx3dServices = [
  {
    title: "3D Modeling & Asset Creation",
    desc: "Craft high-resolution 3D assets optimized for animation, gaming, and interactive experiences.",
  },
  {
    title: "Visual Effects & Motion Design",
    desc: "Elevate storytelling with cinematic VFX, dynamic motion graphics, and scene enhancement.",
  },
  {
    title: "Character Rigging & Animation",
    desc: "Bring characters to life with detailed rigging and fluid, expressive animation workflows.",
  },
  // {
  //   title: "Environment & Set Simulation",
  //   desc: "Design immersive digital environments and set extensions for film, product showcases, and AR/VR.",
  // },
  // {
  //   title: "Render & Compositing Services",
  //   desc: "Deliver photorealistic outputs with professional-grade lighting, shading, and seamless compositing.",
  // },
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen py-10 px-6 md:px-12 xl:px-32 ">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      ><>
      <div className=""><Ourservicefor/></div>
      <div className="">Our Services</div>
        </>
      </motion.h1>

      <div className="">
        {/* Design Services */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 ">Design Services</h2>
          <div className="flex flex-col-reverse md:flex-row gap-10">
          <ul className="md:w-1/2 grid grid-cols-1 gap-2">
            {designServices.map((service, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="p-1 pl-5 duration-300 group ">
                      {/* <Link
                      href={`/services/${toSlug(service.title)}`}
                      className="block group"
                    > */}
                      <h3 className="text-md text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                        {service.title}
                      </h3>
                      <p className="text-sm xl:text-xl text-gray-600 mt-1 group-hover:text-gray-800 ">
                        {service.desc}
                      </p>
                    {/* </Link>
                    */}
                </div>
              </motion.li>
            ))}
          </ul>
          <div className="md:w-1/2">
            <Image
              src='/images/services-img/computer-1867758_1920.jpg'
              alt="Design Service Image"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          </div>
          
        </motion.div>

        {/* video editing */}
         <div id="videoEditing" className="">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 mt-20 ">Video Production Services</h2>
          <div className="flex flex-col-reverse md:flex-row-reverse gap-10">
          <ul className="md:w-1/2 grid grid-cols-1 gap-2">
            {videoServices.map((service, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="p-1 pl-5 rounded-lg duration-300 group ">
                {/* <Link
                  href={`/services/${toSlug(service.title)}`}
                  className="block group"
                > */}
                  <h3 className="text-md text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-sm xl:text-xl text-gray-600 mt-1 group-hover:text-gray-800">
                    {service.desc}
                  </p>
                {/* </Link> */}
                </div>
                
              </motion.li>
              
            ))}
          </ul>
          <div className="md:w-1/2 md:mt-10">
            <Image
              src='/images/services-img/editing-7320125_1920.jpg'
              alt="Design Service Image"
              width={600}
              height={100}
              className="w-full h-auto rounded-lg "
            />
          </div>
          </div>
           
           {/* vfs & 3D servies */}  
           <div id="3d" className="pt-10">

           <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-6 mt-6 ">
              VFX & 3D  Services
            </h2>
            <div className="flex flex-col-reverse md:flex-row gap-10 items-stretch ">
              {/* Service Descriptions */}
              <ul className="grid grid-cols-1 gap-4">
                {vfx3dServices.map((service, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-1   group bg-white">
                      <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                        {service.title}
                      </h3>
                      <p className="text-base xl:text-lg text-gray-600 mt-2 group-hover:text-gray-800">
                        {service.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* AI Illustration */}
              <div className="md:w-1/2">
            <Image
              src='/images/services-img/fantasy-7394956_1920.jpg'
              alt="Design Service Image"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
            </div>
            </motion.div>
            </div>



          {/* <ViewProjectsVideo/> */}
        </motion.div>
        </div>
        {/* <div className=" flex flex-wrap rounded-xl  bg-blue-200">
              <div className="w-full sm:w-1/2  p-4 content-center">
                <Image
                  className="rounded-full w-30 mx-auto"
                  src="/200X200-logo.png"
                  alt="Company Logo"
                  width={150}
                  height={150}
                  priority={false}
                />
                <h1 className="text-center text-lg sm:text-xl font-bold">Indumathi</h1>
                <p className="text-center text-sm sm:text-md">Development Head</p>
              </div>
              <div className="w-full sm:w-1/2 p-6">
                <h1 className="text-3xl sm:text-5xl font-bold text-center">Talk to our research expert</h1>
                <p className="text-center text-sm sm:text-md mt-2">
                  Struggling with user engagement? Our UI/UX design services enhance usability and conversion. Book a free consultation now!
                </p>
                <div className="flex justify-center mt-4">
                  <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-16 border-2  rounded-full" onClick={() => window.open("https://wa.me/7708460702?text=Hi%20Degzzo%0ACan%20you%20connect%20with%20your%20Build%20expert%20for%20Meeting", "hii Degzzo")}>Let&rsquo;s talk</button>
                </div>
              </div>
        </div> */}
            {/* <ViewProjects1/> */}
              <div className=" my-10 flex flex-wrap rounded-xl bg-blue-300">
                  <div className="w-full sm:w-1/2  p-4 content-center">
                    <Image
                      className="rounded-full w-30 mx-auto"
                      src="/200X200-logo.png"
                      alt="Company Logo"
                      width={150}
                      height={150}
                      priority={false}
                    />
                    <h1 className="text-center text-lg sm:text-xl font-bold">HarishRagul</h1>
                    <p className="text-center text-sm sm:text-md">Creative Director</p>
                  </div>
                  <div className="w-full sm:w-1/2 p-6">
                    <h1 className="text-3xl sm:text-5xl font-bold text-center">Talk to our research expert</h1>
                    <p className="text-center text-sm sm:text-md mt-2">
                      Struggling with user engagement? Our UI/UX design services enhance usability and conversion. Book a free consultation now!
                    </p>
                    <div className="flex justify-center mt-4">
                      <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-16 border-2  rounded-full" onClick={() => window.open("https://wa.me/7708460702?text=Hi%20Degzzo%0ACan%20you%20connect%20with%20your%20Design%20expert%20for%20Meeting", "hii Degzzo")}>
                        Let&rsquo;s talk
                      </button>
                    </div>
                  </div>
              </div>

        {/* Build Services */}
        <div id="Build" className="pt-10">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 mt-6 ">Build Services</h2>
          <div className="flex flex-col-reverse md:flex-row gap-10 ">
            <div className=""></div>
          <ul className="grid grid-cols-1 gap-2 ">
            {buildServices.map((service, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                {/* <Link
                  href={`/services/${toSlug(service.title)}`}
                  className="block group"
                > */}
                  <h3 className="text-md text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-sm xl:text-xl text-gray-600 mt-1 group-hover:text-gray-800">
                    {service.desc}
                  </p>
                {/* </Link> */}
                
              </motion.li>
              
            ))}
          </ul>
          <div className="md:w-1/2">
            <Image
              src='/images/services-img/web-1738168_1920.jpg'
              alt="Design Service Image"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          </div>
          {/* <ViewProjectsBuild/> */}
        </motion.div>
     </div>


        {/* ai servies */}
        <div id="ai" className="pt-10">
        <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-6 mt-6 ">
              AI Design Services
            </h2>
            <div className="flex flex-col-reverse md:flex-row-reverse gap-10 items-stretch ">
              {/* Service Descriptions */}
              <ul className="grid grid-cols-1 gap-4 ">
                {aiServices.map((service, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-1 transition duration-300 group bg-white">
                      <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                        {service.title}
                      </h3>
                      <p className="text-base xl:text-lg text-gray-600 mt-2 group-hover:text-gray-800">
                        {service.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* AI Illustration */}
              <div className="md:w-1/2">
            <Image
              src='/images/services-img/10165944.jpg'
              alt="Design Service Image"
              width={600}
              height={800}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
            </div>
          </motion.div>
        <div className=" mt-10  flex flex-wrap rounded-xl  bg-blue-200">
              <div className="w-full sm:w-1/2  p-4 content-center">
                <Image
                  className="rounded-full w-30 mx-auto"
                  src="/200X200-logo.png"
                  alt="Company Logo"
                  width={150}
                  height={150}
                  priority={false}
                />
                <h1 className="text-center text-lg sm:text-xl font-bold">Indumathi</h1>
                <p className="text-center text-sm sm:text-md">Development Head</p>
              </div>
              <div className="w-full sm:w-1/2 p-6">
                <h1 className="text-3xl sm:text-5xl font-bold text-center">Talk to our research expert</h1>
                <p className="text-center text-sm sm:text-md mt-2">
                  Struggling with user engagement? Our UI/UX design services enhance usability and conversion. Book a free consultation now!
                </p>
                <div className="flex justify-center mt-4">
                  <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-16 border-2  rounded-full" onClick={() => window.open("https://wa.me/7708460702?text=Hi%20Degzzo%0ACan%20you%20connect%20with%20your%20Build%20expert%20for%20Meeting", "hii Degzzo")}>Let&rsquo;s talk</button>
                </div>
              </div>
        </div>
        </div>



        

           
      </div>
    </main>
  );
}
