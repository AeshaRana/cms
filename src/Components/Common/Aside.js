import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (


    <aside
      className="app-sidebar bg-body-secondary shadow"
      data-bs-theme="dark"
    >
      {/*begin::Sidebar Brand*/}
      <div className="sidebar-brand">
        {/*begin::Brand Link*/}
        <Link to="./index.html" className="brand-link">
          {/*begin::Brand Image*/}
          <img
            src="/assets/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image opacity-75 shadow"
          />
          {/*end::Brand Image*/} {/*begin::Brand Text*/}
          <span className="brand-text fw-light">Students</span>
          {/*end::Brand Text*/}
        </Link>
        {/*end::Brand Link*/}
      </div>
      {/*end::Sidebar Brand*/} {/*begin::Sidebar Wrapper*/}
      <div className="sidebar-wrapper">
        <nav className="mt-2">
          {/*begin::Sidebar Menu*/}
          <ul
            className="nav sidebar-menu flex-column"
            data-lte-toggle="treeview"
            role="navigation"
            aria-label="Main navigation"
            data-accordion="false"
            id="navigation"
          >
            <li className="nav-item menu-open">
              <Link to="/dashboard" className="nav-link active">
                <i className="nav-icon bi bi-speedometer" />
                <p>
                  Dashboard
                  {/* <i class="nav-arrow bi bi-chevron-right"></i> */}
                </p>
              </Link>
            </li>
            <li className="nav-item menu-open">
              <Link to="searchjobs" className="nav-link active">
                <i className="nav-icon bi bi-search" />
                <p>
                  Search Jobs
                  {/* <i class="nav-arrow bi bi-chevron-right"></i> */}
                </p>
              </Link>
            </li>
            <li className="nav-item menu-open">
              <Link to="jobtracking" className="nav-link active">
                <i className="nav-icon bi bi-circle" />
                <p>
                  Job Tracking
                  {/* <i class="nav-arrow bi bi-chevron-right"></i> */}
                </p>
              </Link>
            </li>

            <li className="nav-item menu-open">
              <Link to="joblisting" className="nav-link active">
                <i className="nav-icon bi bi-speedometer" />
                <p>Job Listing</p>
              </Link>
            </li>

            <li className="nav-item menu-open">
              <Link to="addjob" className="nav-link active">
                <i className="nav-icon bi bi-speedometer" />
                <p>Add Job</p>
              </Link>
            </li>

            <>
  <li className="nav-item menu-open">
    <Link to="studentlisting" className="nav-link active">
      <i className="nav-icon bi bi-search" />
      <p>
        Registered Students
        {/* <i class="nav-arrow bi bi-chevron-right"></i> */}
      </p>
    </Link>
  </li>
  <li className="nav-item menu-open">
    <Link to="companylisting" className="nav-link active">
      <i className="nav-icon bi bi-circle" />
      <p>
        Registerd Companies
        {/* <i class="nav-arrow bi bi-chevron-right"></i> */}
      </p>
    </Link>
  </li>
  <li className="nav-item menu-open">
    <Link to="joblisting" className="nav-link active">
      <i className="nav-icon bi bi-circle" />
      <p>
        Job Listing
        {/* <i class="nav-arrow bi bi-chevron-right"></i> */}
      </p>
    </Link>
  </li>
</>



          </ul>
          {/*end::Sidebar Menu */}
        </nav>
      </div>
      {/*end::Sidebar Wrapper*/}
    </aside>
  );
};

export default Aside;
