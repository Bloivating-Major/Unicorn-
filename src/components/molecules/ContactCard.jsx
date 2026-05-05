const ContactCard = ({ icon: Icon, title, description, value, href }) => {
  return (
    <div className="flex items-start gap-4 group">
      {/* Icon box */}
      <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0 transition-all duration-200 group-hover:bg-gold/15 group-hover:border-gold/35 mt-0.5">
        <Icon size={18} />
      </div>

      <div>
        {title && (
          <p className="text-sm font-semibold text-ivory mb-0.5">{title}</p>
        )}
        {description && (
          <p className="text-xs text-ivory-dim mb-1">{description}</p>
        )}
        {href ? (
          <a
            href={href}
            className="text-sm text-gold hover:text-gold-light transition-colors duration-200 underline-offset-2 hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-ivory-dim leading-6">{value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;