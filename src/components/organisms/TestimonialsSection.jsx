import TestimonialSlider from "../molecules/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section className="bg-dark-2 border-y border-gold/10 section-wrapper">
      <div className="relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow-text block mb-3">Testimonials</span>
            <h2 className="heading-text">Words from our community</h2>
          </div>
          <p className="body-text text-sm max-w-xs sm:text-right">
            Hear what students, parents, and champions say about Unicorn Chess Academy.
          </p>
        </div>

        <TestimonialSlider />
      </div>
    </section>
  );
};

export default TestimonialSection;