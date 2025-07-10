import React from "react";
import { Link, Outlet } from "react-router-dom";
import JobTrackingIndex from "./JobTrackingIndex";

const JobTracking = () => {
  return (
    <div className="app-content">
    <Outlet />
    </div>
  );
};

export default JobTracking;
