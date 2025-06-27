"use client";

import Image from "next/image";

const industries = [
  {
    title: "Real Estate",
    description:
      "Our real estate solutions focus on turning property discovery into a frictionless experience—integrating advanced search filters, virtual tours, and interactive maps. We prioritize user trust, visual clarity, and conversion-focused layouts that make browsing, booking, and buying seamless.",
    image: "/images/industries/realestate.jpg",
    link: "/industries/realestate",
  },
  {
    title: "E-Commerce",
    description:
      "From single-brand stores to large-scale marketplaces, we create e-commerce platforms that convert. Fast-loading UIs, smart product discovery, smooth cart flows, and clean mobile-first design—our solutions are crafted to boost conversions and create loyal shoppers.",
    image: "/images/industries/ecom.jpg",
    link: "/industries/ecom",
  },
  {
    title: "Fintech",
    description:
      "Trust and clarity drive fintech UX. We design secure, data-rich interfaces for neobanks, crypto platforms, lending apps, and investment dashboards—ensuring users always feel confident in every financial decision. Compliance, clarity, and conversion are at the core.",
    image: "/images/industries/fintech.jpg",
    link: "/industries/fintech",
  },
  {
    title: "Telecom",
    description:
      "Telecom design must simplify the complex. We design platforms that manage plans, services, payments, and support—turning legacy systems into modern, scalable tools. Our UI frameworks support both B2C and enterprise B2B environments with ease.",
    image: "/images/industries/telecom.jpg",
    link: "/industries/telecom",
  },
  {
    title: "EdTech",
    description:
      "Education needs to be engaging and accessible. We create learning platforms with gamified content, smart dashboards, collaborative tools, and responsive course design. From K–12 to higher ed and professional upskilling, we tailor experiences for every learner.",
    image: "/images/industries/edtech.jpg",
    link: "/industries/edtech",
  },
  {
    title: "Healthcare",
    description:
      "We build healthcare products with empathy. From patient portals and appointment apps to EMR systems and mental health tools—our design ensures accessibility, clarity, and compliance. We make digital care feel human.",
    image: "/images/industries/healthcare.jpg",
    link: "/industries/healthcare",
  },
  {
    title: "Agriculture",
    description:
      "In agri-tech, clarity and utility matter most. We craft apps and dashboards for crop monitoring, logistics, supply chain tracking, and farm management. Our interfaces empower rural and enterprise users alike with intuitive, data-driven tools.",
    image: "/images/industries/agriculture.jpg",
    link: "/industries/agriculture",
  },
  {
    title: "Enterprise",
    description:
      "Enterprise software should be powerful, not painful. We design internal tools, dashboards, CRMs, and ERPs that reduce friction, increase productivity, and look as good as they function. Our scalable UI systems fit startups and Fortune 500s alike.",
    image: "/images/industries/enterprise.jpg",
    link: "/industries/enterprise",
  },
];

export default function IndustriesPage() {
  return (
    <section className=" py-16 px-5 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
         
        <h1 className="text-4xl mt-10 font-bold text-center mb-4">
          Reimagining industries through design
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          From agriculture, e-commerce, edtech and enterprise solutions to fintech, healthcare, hospitality, IoT and HR solutions, we have designed it all.
        </p>
        
          
        <div className="grid grid-cols-1 gap-15">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-white rounded-xl shadow hover:shadow-md overflow-hidden"
            >
              <div className="w-full md:w-1/2 h-80 relative">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                </div>
                {/* <Link
                  href={industry.link}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Read More →
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
