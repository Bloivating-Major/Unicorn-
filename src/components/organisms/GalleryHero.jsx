import { section } from "framer-motion/client";

const GalleryHero = () => {
  return (
    <section className="section-wrapper">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
      <h1 className="text-4xl md:text-5xl ">
        Our Chess Gallery
      </h1>
      <p className="max-w-xl text-gray-300 text-base md:text-lg leading-relaxed">
        Explore the moments captured at our Chess Academy, from intense
        matches to joyful victories. Each image tells a story of dedication,
        skill, and the vibrant community we foster.
      </p>
    </div>
    </section>
  );
};

export default GalleryHero;
