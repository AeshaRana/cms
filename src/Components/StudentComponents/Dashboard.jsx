import React from "react";
import Navbar from "../Common/Navbar";
import Aside from "../Common/Aside";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const body = document.body;
  body?.classList?.remove("register-page");
  body?.classList?.remove("login-page");

  return (
    <div className="app-wrapper">
      <Navbar />
      <Aside />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
