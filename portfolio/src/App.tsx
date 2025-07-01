import { Outlet } from "react-router-dom";
import "./App.css";
import FloatingGlassNavbar from "./components/FloatingGlassNavbar/FloatingGlassNavbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <FloatingGlassNavbar />
      <div className="page-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
