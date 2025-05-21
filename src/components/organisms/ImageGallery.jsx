import GalleryCard from "../molecules/GalleryCard";

const ImageGallery = () => {
  const galleryImages = Array.from({ length: 6 }).map((_, idx) => ({
    src: "https://via.placeholder.com/150",
    alt: `Gallery Image ${idx + 1}`,
  }));

  return (
    <div className="container mx-auto max-w-6xl text-center">
      <h2 className="text-3xl font-semibold font-rubik mb-2">Image Gallery</h2>
      <p className="text-gray-400 mb-10">
        Explore our vibrant moments and achievements.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <GalleryCard key={idx} imageSrc={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
