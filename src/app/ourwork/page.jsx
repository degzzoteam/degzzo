"use client";

import Image from "next/image";
import Link from "next/link";
import Products from "../../../components/Products"

const projects = [
  {
    title: "MSmappillai",
    subtitle: "UX/UI for investment platform",
    image: "/images/ourwork/ourwork-ms.webp",
    link: "/projects/fintech-redesign",
  },
  {
    title: "RR Enterprises",
    subtitle: "ecomm platform ",
    image: "/images/ourwork/ourwork-rr.webp",
    link: "/projects/eduportal",
  },
  {
    title: "NILA Healthy Treats",
    subtitle: "CRM for agriculture supply chain",
    image: "/images/ourwork/ourwork-nht.webp",
    link: "/projects/agrocrm",
  },
  {
    title: "MACRO WEALTH",
    subtitle: "Poster & Logo Reveal",
    image: "/images/ourwork/ourwork-mw.webp",
    link: "/projects/telecom-dashboard",
  },
  {
    title: "Cloud Hub",
    subtitle: "Cross-platform product design",
    image: "/images/ourwork/ourwork-ch.webp",
    link: "/projects/realestate-app",
  },
  {
    title: "NAVARASA Studio",
    subtitle: "Design system for SaaS",
    image: "/images/ourwork/ourwork-nr.webp",
    link: "/projects/hr-platform",
  },
];

export default function OurWorkPage() {
  return (
    <section className="px-6  bg-white text-gray-900">
      <div className="max-w-6xl pb-10 mx-auto">
        <div className="py-10">
        <Products/>
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">Our Work</h1>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          We help startups and enterprises bring their ideas to life through strategy, design, and development. Here are a few of our featured projects.
        </p>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
      {projects.map((project, i) => (
        <div
          key={i}
          className="bg-white w-20xl:w-50 rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl  transition duration-300"
        >
          <div className="relative h-40 xl:h-60 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover scale-100 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-5 flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-900 text-center">{project.title}</h3>
            <p className="text-sm text-gray-500 text-center">{project.subtitle}</p>
            <div className="mt-3">
              {/* <Link
                href={project.link}
                className="inline-block text-blue-600 text-sm font-medium hover:text-blue-800 transition"
              >
                View Project →
              </Link> */}
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
    </section>
  );
}
