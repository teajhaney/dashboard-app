import { dashboardHeaders } from "../Data/dummyData";
import { CollapsibleSection } from "./export_components";
import { NavLink } from "react-router-dom";
const SideBar = () => {
	
  return (
    <aside className="group max-sm:hidden max-lg:w-16 w-72 bg-bgColor h-full top-0 left-0 px-2 flex flex-col gap-10 pt-5  transition-all duration-300 hover:max-lg:w-72 max-lg:hover:fixed">
      {/* logo */}
      <div className="flex justify-center mx-2">
        <h1 className="text-3xl  font-extrabold text-primary hidden lg:block group-hover:block">
          DASHBOARD
        </h1>
        <h1 className="text-xl font-extrabold text-primary lg:hidden group-hover:hidden">DB</h1>
      </div>
      {/* dashboard links */}
      <div className="flex flex-col gap-5">
        {dashboardHeaders.map((dashboardHeader, index) => (
          <CollapsibleSection
            key={index}
            title={dashboardHeader.title}
            icon={dashboardHeader.icon}>
            {/* Get Links from Each Dashboard Section */}
            <div className="pl-4 flex flex-col text-textColor">
              {dashboardHeader.links.map((link, linkIndex) => (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-textColor"
                  }>
                  <h1 className="mt-3 " key={linkIndex}>
                    {link.name}
                  </h1>
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
