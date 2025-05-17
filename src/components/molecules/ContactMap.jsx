const ContactMap = () => {
  return (
    <div className="w-full h-[400px] rounded-md overflow-hidden shadow-lg">
      <iframe
        title="Chess Academy Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.421401880399!2d151.20929531521012!3d-33.86882008065344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f1b0dbbdf%3A0x5045675218ce7e0!2s456%20Chess%20Lane%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sin!4v1718123456789"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
