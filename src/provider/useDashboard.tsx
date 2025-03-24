import { createContext, useContext } from "react";
import { DashboardContextType } from "./DasboardProvider";

export const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const useDashboardContext = () => {
    const context = useContext(DashboardContext);
    if (!context) throw new Error("useDashboardContext must be used within BlogProvider");
    return context;
}
