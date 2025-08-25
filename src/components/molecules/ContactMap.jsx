const ContactMap = () => {
  return (
    <div className="w-full h-[400px] rounded-md overflow-hidden shadow-lg">
      <iframe
        title="Regal Treasure Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.168418949911!2d77.46197567477762!3d23.273329306925145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69f6cc935e83%3A0x7d78964600879b46!2sRegal%20Treasure!5e0!3m2!1sen!2sin!4v1757913591047!5m2!1sen!2sin"
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
