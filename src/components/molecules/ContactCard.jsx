const ContactCard = ({ icon: Icon, title, description, value, href }) => {
  return (
    <div className="flex items-start gap-4 group">
      {/* Icon box */}
      <div className="w-10 h-10 rounded-xl bg-royal-50 border border-royal/15 flex items-center justify-center text-royal flex-shrink-0 transition-all duration-200 group-hover:bg-royal-100 group-hover:border-royal/30 mt-0.5">
        <Icon size={18} />
      </div>

      <div>
        {title && (
          <p className="text-sm font-semibold text-ink mb-0.5">{title}</p>
        )}
        {description && (
          <p className="text-xs text-ink-muted mb-1">{description}</p>
        )}
        {href ? (
          <a
            href={href}
            className="text-sm text-royal hover:text-royal-light transition-colors duration-200 underline-offset-2 hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-ink-light leading-6">{value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;