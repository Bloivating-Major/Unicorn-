import React from "react";
import { FaChessKnight } from "react-icons/fa";

const MenuGroup = ({ title, items }) => {
  return (
    <div>
      <h3 className="font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="flex gap-2 ">
              <div className="p-1">
              <FaChessKnight />
              </div>
              <div>
                <h1 className="font-semibold">{item.title}</h1>
                <p className="text-sm text-gray-400 max-sm:hidden">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuGroup;
