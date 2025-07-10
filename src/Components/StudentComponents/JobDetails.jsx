import React from "react";

const JobDetails = () => {
  return (
    <div className="container mt-5">
      <div className="container mt-5">
        <div className="card shadow-lg border-0">
          <div className="card-body">
            {/* Title */}
            <h1 className=" mb-2">Frontend Developer - React.js</h1>
            <h5 className="text-muted mb-3">ABC Technologies Pvt Ltd</h5>
            {/* Badges */}
            <div className="mb-3">
              <span className="badge bg-primary">Full Time</span>
              <span className="badge bg-success">Remote</span>
              <span className="badge bg-info">3 Openings</span>
            </div>
            {/* Job Details */}
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item">
                <strong>Location:</strong> Ahmedabad, India
              </li>
              <li className="list-group-item">
                <strong>Salary:</strong> ₹6 - 8 LPA
              </li>
              <li className="list-group-item">
                <strong>Experience:</strong> 2-4 years
              </li>
              <li className="list-group-item">
                <strong>Posted On:</strong> 5th July 2025
              </li>
            </ul>
            {/* Additional Info Tabs */}
            <div className="row mt-2">
              <div className="col-12">
                <ul className="nav nav-tabs" id="detailTabs" role="tablist">
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      id="desc-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#desc"
                      type="button"
                    >
                      Job Description
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      id="req-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#req"
                      type="button"
                    >
                      Requirements
                    </button>
                  </li>
                </ul>
                <div className="tab-content p-3 border border-top-0">
                  <div className="tab-pane fade show active" id="desc">
                    <p>
                      #Hiring_Alert for Software Developers (WFH)
                      <br />
                      1. Python Developer- Fresher (0-1 years) (Python, SQL,
                      Database) - 3-6 LPA
                      <br />
                      2. Java Developer - 0-1 year experience (Java, Hibernate,
                      SQL, Database) 3-5Lpa
                      <br />
                      3. Web Developer - (0-1 years) (HTML, CSS, JS) 3-4LPA
                      <br />
                      Passout Batch- 2020-2024 Any Branch
                    </p>
                  </div>
                  <div className="tab-pane fade" id="req">
                    <ul>
                      <li>Bachelor’s degree in Computer Science</li>
                      <li>2+ years experience in React.js</li>
                      <li>Good knowledge of REST APIs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="mt-4 mb-3 "> Benefits</h5>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item">Flexible Work Hours</li>
              <li className="list-group-item">Remote Work Options</li>
              <li className="list-group-item">Health Insurance</li>
              <li className="list-group-item">Annual Performance Bonus</li>
            </ul>
            {/* Apply Button */}
            <div className="d-grid">
              <a href="#" className="btn btn-primary btn-lg mt-5">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
