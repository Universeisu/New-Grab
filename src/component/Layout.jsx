import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "./navbar"; // Ensure the correct import path and case for Navbar
import Footer from "./footer"; // Ensure the correct import path and case for Footer

const Layout = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Layout;
