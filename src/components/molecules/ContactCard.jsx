import { ArrowRight } from "lucide-react";

const ContactCard = ({ icon: Icon, title, description, value, href }) => {
  return (
    <div>
      <Icon className="w-6 h-6 mb-2" />
      <p className="font-semibold">{title}</p>
      {description && <p className="text-gray-400 text-sm">{description}</p>}
      {href ? (
        <a href={href} className="text-blue-500 underline text-sm">
          {value}
        </a>
      ) : (
        <p className="text-gray-300 text-sm">{value}</p>
      )}
    </div>
  );
};

export default ContactCard;
