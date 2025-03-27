import { Outlet } from "react-router-dom";
import {
  ScrollToTop,
  SideBar,
  NavComponent,
  Footer,
} from "./components/export_components";
function App() {
  return (
    <div className=" flex h-screen bg-bgColor2">
      <SideBar />
      <div className="flex-1 flex flex-col h-screen ">
        <ScrollToTop />
        <NavComponent />
        <div className="flex-1 pt-3 px-3 overflow-y-scroll">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

