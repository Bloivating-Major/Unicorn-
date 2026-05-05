import { useState } from "react";
import GalleryCard from "../molecules/GalleryCard";

const PLACEHOLDER_IMAGES = Array.from({ length: 9 }, (_, i) => ({
  src: `https://picsum.photos/seed/chess${i + 1}/600/450`,
  alt: `Chess Academy Moment ${i + 1}`,
}));

const FILTERS = ["All", "Tournaments", "Coaching", "Events", "Achievements"];

const ImageGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="section-wrapper bg-obsidian">
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-200
              ${activeFilter === f
                ? "bg-gold text-obsidian shadow-gold-sm"
                : "bg-dark-3 border border-gold/15 text-ivory-dim hover:border-gold/30 hover:text-ivory"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Gallery grid — masonry-style with different sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PLACEHOLDER_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={idx === 0 || idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
          >
            <GalleryCard imageSrc={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      {/* Load more */}
      <div className="text-center mt-12">
        <button className="btn-ghost px-8 py-3 text-sm font-semibold tracking-wide uppercase rounded-xl border border-gold/25 text-ivory hover:border-gold hover:text-gold-light transition-all duration-200">
          Load More →
        </button>
      </div>
    </section>
  );
};

export default ImageGallery;