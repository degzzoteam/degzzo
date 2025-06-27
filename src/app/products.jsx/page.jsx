"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    name: "DesignOps Suite",
    tagline: "Design system manager for scaling teams",
    description:
      "Manage, document, and evolve your design tokens, components, and guidelines—seamlessly integrated into your dev pipeline.",
    image: "/products/designops.png",
    link: "/products/designops",
  },
  {
    name: "BrandFlow",
    tagline: "Visual identity manager for fast-moving teams",
    description:
      "From logo sets to UI components, BrandFlow keeps your brand assets in one place. Perfect for design + marketing collab.",
    image: "/products/brandflow.png",
    link: "/products/brandflow",
  },
  {
    name: "UX Audit AI",
    tagline: "AI-powered usability scanner",
    description:
      "Scan websites and apps for UX gaps, readability, accessibility, and UI consistency—get reports and fix suggestions instantly.",
    image: "/products/uxaudit.png",
    link: "/products/uxaudit",
  },
];

export default function ProductsPage() {
  return (
    <section className="bg-white text-gray-900 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Tools we built in-house to empower designers, developers, and product teams.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 w-16 h-16 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
              <p className="text-sm text-blue-600 font-medium mb-2">{product.tagline}</p>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <Link
                href={product.link}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                View Product →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
