"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const images = [
  { url: "/images/Gallery/none.webp", href: "/" },
  { url: "/images/Gallery/navarasa.webp", href: "/" },
  { url: "/images/Gallery/Ch.webp", href: "/" },
  { url: "/images/Gallery/ms.webp", href: "/" },
  { url: "/images/Gallery/rr.webp", href: "/" },
];

export default function GalleryPage() {
  return (
    <main className="bg-white  pt-10 xl:pt-20 pb-8">
      <div className="text-center mb-6 px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Our Partner Gallery
        </h1>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Trusted by teams worldwide. Explore a few of our key partnerships.
        </p>
      </div>

      <div className="xl:px-30 flex-col">
        {/* Row 1 */}
        <div className="flex gap-2 w-auto px-5 pb-5">
          {images.slice(0, 3).map((img, i) => (
            <motion.div
              key={i}
              className={i === 0 || i === 2 ? "w-2/6" : "w-2/3"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={img.href}>
                <img
                  src={img.url}
                  alt={`Image ${i + 1}`}
                  className={`rounded-2xl object-cover w-full transition hover:scale-[1.02] ${
                    i === 0 || i === 2
                      ? "h-full"
                      : "aspect-[9/10.5] xl:aspect-[9/5]"
                  }`}
                  loading="lazy"
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-2 w-auto px-5">
          {images.slice(3, 6).map((img, i) => (
            <motion.div
              key={i + 3}
              className={i === 0 || i === 2 ? "w-2/6" : "w-2/3"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={img.href}>
                <img
                  src={img.url}
                  alt={`Image ${i + 4}`}
                  className={`rounded-2xl object-cover w-full transition hover:scale-[1.02] ${
                    i === 0 || i === 2
                      ? "h-full"
                      : "aspect-[9/10.5] xl:aspect-[9/5]"
                  }`}
                  loading="lazy"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}


// | Section        | Current Class Used     | Actual Aspect Ratio    | Suggested Ratio    | Best For                       |
// | -------------- | ---------------------- | ---------------------- | ------------------ | ------------------------------ |
// | Vertical image | `aspect-[9/16]`        | 9:16 (portrait)        | ✅ Keep             | Tall mobile-style visuals      |
// | Medium block   | `aspect-[9/10.5]`      | 9:10.5 (almost square) | 4:5 or 3:4         | Better fit for product shots   |
// | Horizontal     | `xl:aspect-[9/5]`      | 9:5 (wide)             | ✅ Keep             | Banners, horizontal showpieces |
// |  Square backup  | no aspect ratio (auto) | ❌ Risky                | Add `aspect-[1/1]` | To ensure uniformity on grid   |





// | Image Width Class | Current Aspect Class              | Recommended Aspect Ratio   | Use Case                               |
// | ----------------- | --------------------------------- | -------------------------- | -------------------------------------- |
// | `w-2/6` (narrow)  | `"h-full"`                        | ✅ `aspect-[3/4]`           | Portrait-like for narrow column        |
// | `w-2/3` (wide)    | `aspect-[9/10.5] xl:aspect-[9/5]` | ✅ `aspect-[4/3]` or `16/9` | Landscape/product promo, feature block |


