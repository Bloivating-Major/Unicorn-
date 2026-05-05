import GalleryHero  from "../organisms/GalleryHero";
import ImageGallery  from "../organisms/ImageGallery";
import CTASection    from "../organisms/CTASection";

const GalleryPageTemplate = () => {
  return (
    <main className="bg-obsidian font-poppins">
      <GalleryHero />
      <ImageGallery />
      <CTASection />
    </main>
  );
};

export default GalleryPageTemplate;