import React from "react";
import Button from "../atoms/Button";

const FeatureCard = ({ title, description, buttonText, iconUrl }) => {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16  rounded-full mx-auto mb-4">
        {iconUrl && <img src={iconUrl} alt="" className="w-full h-full rounded-full object-cover" />}
      </div>
      <h3 className="md:font-medium mb-2 md:text-2xl text-xl">{title}</h3>
      <p className="text-md md:w-11/12 mx-auto ">{description}</p>
      <Button variant="primary" size="small" className="mt-4">{buttonText}</Button>
    </div>
  );
};

export default FeatureCard;