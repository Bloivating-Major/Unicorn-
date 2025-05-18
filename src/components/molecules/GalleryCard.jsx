const GalleryCard = ({ imageSrc, alt }) => {
  return (
    <div className="aspect-[4/3] bg-gray-300 rounded-md flex items-center justify-center overflow-hidden">
      <img
        src={imageSrc}
        alt={alt}
        className="w-12 h-12 opacity-60 object-cover"
      />
    </div>
  );
};

export default GalleryCard;
