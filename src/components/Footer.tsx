import { GoQuestion } from "react-icons/go";

const Footer = () => {
  return (
    <div className="bg-bgColor h-12 flex justify-center items-center sm:justify-between gap-2 px-2 text-sm">
      <h1>
        Copyright © 2025 axelit. All rights reserved{" "}
        <span className="text-primary"> V1.0.0</span> ✨
      </h1>
      <div className="flex gap-2 items-center">
        <h1>Need Help</h1>
        <GoQuestion />
      </div>
    </div>
  );
};

export default Footer;
