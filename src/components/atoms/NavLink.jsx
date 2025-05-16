import { useNavigate } from "react-router-dom";

const NavLink = ({
  href = "#",
  children,
  className = "",
  onNavigate, // Pass a function to close the menu from parent
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    // Close the mobile menu (triggered from parent via prop)
    if (onNavigate) onNavigate();

    // Delay navigation slightly to let animation finish
    setTimeout(() => {
      navigate(href);
    }, 100); // Adjust delay based on your animation timing
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`hover:text-gray-300 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default NavLink;
