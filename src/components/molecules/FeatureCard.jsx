import React from "react";
import Button from "../atoms/Button";

const FeatureCard = ({ title, description, buttonText, iconUrl }) => {
  return (
    <div className="text-center py-6">
      <div className="w-16 h-16  rounded-full mx-auto mb-4">
        {iconUrl && <img src={iconUrl} alt="" className="w-full h-full rounded-full object-cover" />}
      </div>
      <h3 className="sub-heading-text mb-5">{title}</h3>
      <p className="body-text">{description}</p>
      <Button variant="primary" size="medium" className="mt-4">{buttonText}</Button>
    </div>
  );
};

export default FeatureCard;