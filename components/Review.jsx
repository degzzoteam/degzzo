"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const testimonials = [
  {
    logo: "/200X200-logo.png",
    message:
      "I highly recommend Degzzo to anyone looking for top-tier designing services. From the initial consultation to the final design, they truly listened to my vision and brought it to life in a way that was even better than I imagined.",
    name: "Dinesh Kumar",
    title: "Navarasa studio CEO + Co-founder",
  },
  {
    logo: "/200X200-logo.png",
    message:
      "Degzzo's branding and motion design work exceeded expectations. They brought our campaign to life with animations that were not only visually stunning but also perfectly aligned with our message. Their process is sharp, collaborative, and fast.",
    name: "Vignesh",
    title: "Macro Wealth CEO + Co-founder",
  },
  {
    logo: "/200X200-logo.png",
    message:
      "Degzzo helped us completely rethink our digital identity. From logo refinement to a scalable UX/UI system, everything was executed with precision and empathy.Their team works like an extension of ours.",
    name: "Anthony Beilin",
    title: "Collective CEO + Co-founder",
  },
];

export default function ReviewSection() {
  return (
    <div className=" bg-gray-100 mt-10 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="mx-5 xl:mx-40">
        <div className=" p-2 flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div className="w-full text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-semibold text-black pt-10  "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What They Say About Us
          </motion.h2>
          </div>

          {/* <motion.a
            href="/reviews"
            className="mt-4 sm:mt-0 text-black font-medium flex items-center gap-2 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Read more
            <FaArrowRight size={15}  />
          </motion.a> */}
        </div>

        {/* Reviews */}
           <div className=" px-2 flex flex-col md:flex-row text-black gap-5 justify-between w-full pb-5">
              {testimonials.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/3"
                >
                  <div className="bg-blue-300 p-5 h-50 xl:h-60 min-h-[180px] xl:min-h-[200px]  flex flex-col justify-between rounded-lg shadow-md ">
                    {/* <img src={review.logo} alt="" className="rounded-full w-15 h-15 "/> */}
                    <div className="flex gap-2 items-center">
                    <p className="text-sm">“{review.message}”</p>
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-xs text-gray-600">{review.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </div>
        {/* Header */}
    </div>
  );
}
