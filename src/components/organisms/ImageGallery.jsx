import { useState } from "react";
import { galleryImages as GALLERY_IMAGES } from "../../lib/constants/galleryImages";
import { motion, AnimatePresence } from "framer-motion";
import GalleryCard from "../molecules/GalleryCard";
import {
  staggerContainer,
  scaleUpItem,
  viewportOnce,
} from "../../lib/animations";

const FILTERS = ["All", "Tournaments", "Coaching", "Events", "Achievements"];

const ImageGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages =
  activeFilter === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(
        (image) => image.category === activeFilter
      );

  return (
    <section className="section-wrapper bg-surface-alt">
      {/* Filter tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-200
              ${activeFilter === f
                ? "bg-gradient-to-r from-royal-light to-royal text-white shadow-brand-sm"
                : "bg-white border border-border-light text-ink-muted hover:border-royal/25 hover:text-royal"
              }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Gallery grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredImages.map((img, idx) => (
            <motion.div
              key={idx}
              variants={scaleUpItem}
              className={idx === 0 || idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <GalleryCard imageSrc={img.src} alt={img.alt} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Load more */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <button className="btn-ghost px-8 py-3 text-sm font-semibold tracking-wide uppercase rounded-xl">
          Load More →
        </button>
      </motion.div>
    </section>
  );
};

export default ImageGallery;