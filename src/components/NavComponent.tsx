import { CgMenuGridO } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CiLight } from "react-icons/ci";
import { PiBellSimpleLight } from "react-icons/pi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { dashboardHeaders } from "../Data/dummyData";

const NavComponent = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const handleMenuClick = () => {
    setIsMenu((prev) => !prev);
  };
  const animateFromYtop = {
    hidden: { opacity: 0, y: -30 }, // Start hidden with opacity 0, slightly to the right
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Slide in smoothly
  };
  return (
    <div className="relative h-16 z-50 p-3 flex max-sm:justify-between sm:justify-end tems-center text-textColor">
      <AnimatePresence>
        {isMenu && (
          <motion.div
            variants={animateFromYtop}
            viewport={{ once: false, amount: 0.1 }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute left-0 top-14 bg-white shadow-sm h-fit w-full  py-5  sm:hidden">
            {/* navigation link */}
            <div onClick={handleMenuClick} className="flex flex-col gap-5">
              {dashboardHeaders.map((dashboardHeader, index) => (
                <div key={index} className="pl-4 flex flex-col text-textColor">
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
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CgMenuGridO
        className="sm:hidden text-3xl cursor-pointer"
        onClick={() => setIsMenu((prev) => !prev)}
      />

      <div className="flex gap-2 text-3xl">
        <IoIosSearch />
        <CiLight />
        <PiShoppingCartSimpleLight />
        <PiBellSimpleLight />
      </div>
    </div>
  );
};

export default NavComponent;
