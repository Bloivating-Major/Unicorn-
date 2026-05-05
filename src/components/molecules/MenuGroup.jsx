import React from "react";

const MenuGroup = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="flex flex-col gap-0.5 group cursor-pointer"
            >
              <span className="text-sm font-medium text-ivory group-hover:text-gold-light transition-colors duration-200 flex items-center gap-2">
                <span className="text-gold/60 text-xs">♟</span>
                {item.title}
              </span>
              {item.description && (
                <span className="text-xs text-ivory-dim pl-5 hidden sm:block">
                  {item.description}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuGroup;