import { motion } from "framer-motion";
import Button from "../atoms/Button";
import { aboutUsPage } from "../../assets/images";
import {
  slideInLeft,
  slideInRight,
  viewportOnce,
} from "../../lib/animations";

const JoinAcademyCTA = () => {
  return (
    <section className="bg-white border-y border-border-light section-wrapper">
      <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">

        {/* Text */}
        <motion.div
          className="flex flex-col gap-5 order-2 lg:order-1 text-center lg:text-left"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="eyebrow-text">Join Us</span>
          <h2 className="heading-text">
            Unlock your potential —{" "}
            <em className="italic text-royal">
              join our Chess Academy
            </em>{" "}
            community today
          </h2>
          <p className="body-text">
            As part of our vibrant academy, you'll gain access to expert coaching,
            exclusive tournaments, and a strong support system. Start your journey
            toward chess mastery today.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
            <Button variant="primary" size="large"
              onClick={() =>
                openWhatsApp(
                  "Hey! I want to join the academy at Unicorn Chess Academy."
                )
              }
            >Join Now</Button>
            <Button variant="secondary" size="large"
              onClick={() =>
                openWhatsApp(
                  "Hey! I want to learn more about the academy at Unicorn Chess Academy."
                )
              }
            >Learn More</Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="order-1 lg:order-2"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="relative rounded-2xl overflow-hidden border border-border-light shadow-card-lg">
            <img
              src={aboutUsPage}
              alt="Students at Unicorn Chess Academy"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinAcademyCTA;