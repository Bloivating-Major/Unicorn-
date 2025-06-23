import TestimonialSlider from "../molecules/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section className="section-wrapper relative">
      <div className="relative max-sm:p-3">
        <h2 className="heading-text mb-4">Customer Testimonials</h2>
        <p className="mb-10 body-text">
          My child has grown tremendously in confidence and skill!
        </p>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default TestimonialSection;
