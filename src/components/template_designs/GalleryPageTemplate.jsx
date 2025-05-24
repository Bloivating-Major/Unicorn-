import React from 'react'
import GalleryHero from '../organisms/GalleryHero';
import ImageGallery from '../organisms/ImageGallery';

const GalleryPageTemplate = () => {
return (
    <main className="bg-background-dark text-white min-h-screen px-6 py-12 font-poppins">
      <GalleryHero />
      <ImageGallery />
    </main>
  );
}

export default GalleryPageTemplate
