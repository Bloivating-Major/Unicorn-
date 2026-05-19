const GalleryHero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 board-pattern pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(45,58,140,0.04),transparent_70%)] pointer-events-none" />

      <div className="section-wrapper relative z-10 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="eyebrow-text block mb-4 animate-fade-up">Gallery</span>
            <h1 className="heading-text animate-fade-up delay-100">
              Our Chess{" "}
              <em className="italic text-royal">Gallery</em>
            </h1>
          </div>
          <p className="max-w-md body-text leading-8 animate-fade-up delay-200">
            Explore moments captured at our Chess Academy — from intense matches
            to joyful victories. Each image tells a story of dedication, skill, and
            the vibrant community we foster.
          </p>
        </div>
      </div>

      <div className="gold-divider" />
    </section>
  );
};

export default GalleryHero;