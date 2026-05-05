import { useState } from "react";

const GalleryCard = ({ imageSrc, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300 bg-dark-3 cursor-pointer">
      {/* Loading skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-dark-3 animate-pulse flex items-center justify-center">
          <span className="text-gold/20 text-4xl">♟</span>
        </div>
      )}

      <img
        src={imageSrc}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105
          ${loaded ? "opacity-100" : "opacity-0"}`}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
        <p className="text-ivory text-sm font-medium">{alt}</p>
      </div>
    </div>
  );
};

export default GalleryCard;