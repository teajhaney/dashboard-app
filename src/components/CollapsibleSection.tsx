import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface CollapsibleSectionProbs {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const CollapsibleSection = ({
  title,
  children,
  icon,
}: CollapsibleSectionProbs) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" mb-2">
      {/* Title with Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={` flex justify-between max-lg:justify-center group-hover:justify-between  items-center w-full text-left font-semibold text-2xl lg:px-3 group-hover:px-3 py-2 ${
          isOpen ? "bg-accents text-textHead font-semibold" : "text-textColor"
        } rounded-xl`}>
        <div className="flex gap-2  justify-between items-center max-lg:justify-center group-hover:justify-between">
          {" "}
          <span className="text-center max-lg:text-lg group-hover:text-2xl">
            {icon}
          </span>
          <span className="max-lg:hidden group-hover:block ">{title}</span>
        </div>
        <span className="text-sm font-extrathin max-lg:hidden group-hover:block">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>

      {/* Content with Sliding Animation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden max-lg:hidden group-hover:block">
        {children}
      </motion.div>
    </div>
  );
};

export default CollapsibleSection;
