import React from "react";
import MenuGroup from "../molecules/MenuGroup";
import Button from "../atoms/Button";

const MainMenu = () => {
  const menuData = [
    {
      title: "Explore Our Pages",
      items: [
        { title: "Coaching Sessions", description: "Learn from experienced chess coaches." },
        { title: "Membership", description: "Become part of our vibrant chess community." },
        { title: "FAQs", description: "Find answers to common questions." },
        { title: "Sign Up", description: "Start your chess journey today." }
      ]
    },
    {
      title: "More Opportunities",
      items: [
        { title: "Tournaments", description: "Join exciting competitions and showcase your skills." },
        { title: "Events", description: "Participate in workshops and special events." },
        { title: "Testimonials", description: "Hear from our satisfied students and parents." },
        { title: "Login", description: "Access your account and resources." }
      ]
    },
    {
      title: "Stay Connected",
      items: [
        { title: "Online Classes", description: "Flexible learning from the comfort of home." },
        { title: "Blog", description: "Read tips and strategies from chess experts." },
        { title: "Community", description: "Join a network of passionate chess enthusiasts." },
        { title: "Learn More", description: "Discover what we offer at our academy." }
      ]
    },
    {
      title: "Join Our Academy",
      items: [
        { title: "Resources", description: "Access valuable materials for your chess journey." },
        { title: "Support", description: "Get assistance with your chess inquiries." },
        { title: "Contact Us", description: "Reach out for more information." },
        { title: "Get Started", description: "Begin your chess adventure with us." }
      ]
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {menuData.map((group, index) => (
          <MenuGroup key={index} title={group.title} items={group.items} />
        ))}
      </div>
      <div className="container mx-auto mt-8 flex justify-between items-center border-t border-gray-700 pt-4">
        <p>Ready to join us?</p>
        <div className="flex gap-4">
          <Button variant="primary" size="small">Sign up for free</Button>
          <Button variant="secondary" size="small">Join</Button>
          <Button variant="secondary" size="small">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;