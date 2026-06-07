import { motion } from "framer-motion";
import ContactFormFields from "../molecules/ContactFormFields";
import ContactMap from "../molecules/ContactMap";
import {
  slideInLeft,
  slideInRight,
  fadeUp,
  viewportOnce,
} from "../../lib/animations";

const ContactForm = () => {
  return (
    <section className="bg-surface-alt border-t border-border-light section-wrapper">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Form side */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="eyebrow-text block mb-3">Connect</span>
          <h2 className="heading-text mb-3">Send us a message</h2>
          <p className="body-text mb-8 text-sm">
            We're here to answer your questions and help you start your chess journey.
          </p>
          <ContactFormFields />
        </motion.div>

        {/* Map side */}
        <motion.div
          className="flex flex-col justify-center"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <ContactMap />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;