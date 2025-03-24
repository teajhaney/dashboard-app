import { useState, ReactNode } from "react";
import { DashboardContext } from "./useDashboard";

// interface Blog {

// }

export interface DashboardContextType {
  menuBarOpen: boolean;
  setMenuBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
///////////////
export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [menuBarOpen, setMenuBarOpen] = useState(false);

  return (
    <DashboardContext.Provider
      value={{
        menuBarOpen,
        setMenuBarOpen,
      }}>
      {children}
    </DashboardContext.Provider>
  );
};
