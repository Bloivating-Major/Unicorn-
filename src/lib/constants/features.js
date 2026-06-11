import { pawn } from "../../assets/images";
import { rook } from "../../assets/images";
import { Knight } from "../../assets/images";

export const features = [
  {
    title: "Join a Community of Passionate Chess Learners and Players",
    description:
      "Experience the joy of chess while building critical thinking skills.",
    buttonText: "Join",
    action: {
      type: "link",
      url: "https://chat.whatsapp.com/Eq3e80MewtWER9ecUJ4Hj9",
    },
    iconUrl: pawn,
  },
  {
    title: "Book Your First Class Today and Start Your Chess Journey",
    description:
      "Our classes cater to all skill levels, from beginners to advanced players.",
    buttonText: "Book",
    action: {
      type: "whatsapp",
      message:
        "Hey! I want to book my first class today and start my chess journey! 😁",
    },
    iconUrl: rook,
  },
  {
    title: "Discover the Exciting World of Chess Tournaments and Events",
    description:
      "Join us for thrilling competitions that foster growth and camaraderie.",
    buttonText: "Learn",
    action: {
      type: "whatsapp",
      message:
        "Hey! I want to join Unicorn Chess Academy and discover the exciting world of chess tournaments and events! 😁",
    },
    iconUrl: Knight,
  },
];