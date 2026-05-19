import { Link } from "react-router-dom";

const NavLink = ({
  href = "#",
  children,
  className = "",
  onNavigate,
  ...props
}) => {
  const isExternal =
    href.startsWith("http://") || href.startsWith("https://");

  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  // External Links
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`relative text-ink-light hover:text-royal transition-colors duration-200 
        after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px 
        after:bg-royal after:transition-all after:duration-300 hover:after:w-full 
        ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal Routes
  return (
    <Link
      to={href}
      onClick={handleClick}
      className={`relative text-ink-light hover:text-royal transition-colors duration-200 
      after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px 
      after:bg-royal after:transition-all after:duration-300 hover:after:w-full 
      ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;