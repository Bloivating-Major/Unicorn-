const WHATSAPP_NUMBER = "917389209576";

export const openWhatsApp = (message) => {
  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
    "_blank"
  );
};