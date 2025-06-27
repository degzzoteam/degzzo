"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    name: "RR ENTERPRISES",
    logo: "/clients/Degzzo-rr.webp",
    link: "/",
    desc: "A dynamic identity for RR Enterprises—built to scale with their growing distribution network.",
  },
  {
    name: "MSmappillai",
    logo: "/clients/Degzzo-ms.webp",
    link: "/",
    desc: "Brand identity and website design for MS Mappillai—a modern digital presence for a bold brand.",
  },
  {
    name: "MACRO WEALTH",
    logo: "/clients/Degzzo-mw.webp",
    link: "/",
    desc: "Redesigned the logo and crafted a bold branding poster for Macro Wealth—a finance-first brand with clarity and confidence.",
  },
  {
    name: "UNIQUE CREATION",
    logo: "/clients/Degzzo-uc.webp",
    link: "/",
    desc: "Logo design and animation created for Unique Creation—a brand that celebrates originality through motion and identity.",
  },
];

export default function OurRecentClients() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Our Recent Clients
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            From early-stage startups to established enterprises, we've partnered with diverse teams across industries to deliver meaningful digital experiences.
          </p>
        </div>

        <div className="xl:mx-30 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
          {clients.map((client, i) => (
            <ClientCard key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientCard({ client }) {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <Link href={client.link} className="group">
      <div
        className={`bg-gray-50 rounded-2xl p-8 h-full flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-2 duration-300 border border-gray-100 ${
          isTouched ? "bg-white shadow-xl -translate-y-2" : ""
        }`}
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setIsTouched(false)}
      >
        {/* Logo Container */}
        <div className="relative h-16 w-24 mb-2 xl:mb-6 flex items-center justify-center">
          <Image
            src={client.logo || "/placeholder.svg?height=64&width=96"}
            alt={`${client.name} logo`}
            fill
            className={`object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 ${
          isTouched ? "grayscale-0 opacity-100 " : ""
        } `}
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 mb-3">
              {client.name}
            </h3>
            <p className="text-xs xl:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 leading-relaxed">
              {client.desc}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}