import { useNavigate } from "react-router-dom";

const NavLink = ({
  href = "#",
  children,
  className = "",
  onNavigate,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate();
    setTimeout(() => navigate(href), 100);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative text-ivory-dim hover:text-ivory transition-colors duration-200 
        after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px 
        after:bg-gold after:transition-all after:duration-300 hover:after:w-full 
        ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default NavLink;