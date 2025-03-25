import { useState } from "react";
import { dashboardHeaders } from "../Data/dummyData";
import { CollapsibleSection } from "./export_components";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSectionClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Only one active section
  };

  return (
    <aside className="group max-sm:hidden max-lg:w-16 w-72 bg-bgColor h-full top-0 left-0 px-2 flex flex-col gap-10 pt-5 transition-all duration-300 hover:max-lg:w-72">
      {/* Logo */}
      <div className="flex justify-start mx-2">
        <h1 className="text-3xl font-extrabold text-primary hidden lg:block group-hover:block">
          DASHBOARD
        </h1>
        <h1 className="text-xl font-extrabold text-primary lg:hidden group-hover:hidden">
          DB
        </h1>
      </div>

      {/* Dashboard Links */}
      <div className="flex flex-col gap-5">
        {dashboardHeaders.map((dashboardHeader, index) => (
          <CollapsibleSection
            key={index}
            title={dashboardHeader.title}
            icon={dashboardHeader.icon}
            isClicked={activeIndex === index} // Pass active state
            onClick={() => handleSectionClick(index)} // Handle click event
          >
            {/* Links inside the section */}
            <div className="pl-4 flex flex-col text-textColor">
              {dashboardHeader.links.map((link, linkIndex) => (
                <NavLink
                  key={linkIndex}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-textColor"
                  }>
                  <h1 className="mt-3">{link.name}</h1>
                </NavLink>
              ))}
            </div>
          </CollapsibleSection>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
