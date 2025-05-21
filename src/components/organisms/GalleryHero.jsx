const GalleryHero = () => {
  return (
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
      <h1 className="text-4xl md:text-5xl ">
        Our Chess Gallery
      </h1>
      <p className="max-w-xl text-gray-300 text-base md:text-lg leading-relaxed">
        Explore the moments captured at our Chess Academy, from intense
        matches to joyful victories. Each image tells a story of dedication,
        skill, and the vibrant community we foster.
      </p>
    </div>
  );
};

export default GalleryHero;
