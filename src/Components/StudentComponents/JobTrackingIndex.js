import React from "react";
import { Link } from "react-router-dom";

const JobTrackingIndex = () => {
  return (
    <div className="col-md-12 mt-4">
      <div className="card mb-4">
        <div className="card-header">
          <h3 className="card-title"> Job Status Overview</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body p-0">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th style={{ width: "5%" }}>#</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Applied On</th>
                <th>Status</th>
                <th>Progress</th>
                <th style={{ width: "15%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-middle">
                <td>1</td>
                <td>
                  <strong>React Developer</strong>
                </td>
                <td>ABC Technologies</td>
                <td>05-Jul-2025</td>
                <td>
                  <span className="badge bg-warning">Interview Scheduled</span>
                </td>
                <td>
                  <div className="progress" style={{ height: 8 }}>
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "60%" }}
                    />
                  </div>
                  <small>60% Complete</small>
                </td>
                <td>
                  <Link to="jobdetail" className="btn btn-sm btn-primary">
                    View
                  </Link>
                  <button className="btn btn-sm btn-danger">Cancel</button>
                </td>
              </tr>
              <tr className="align-middle">
                <td>2</td>
                <td>
                  <strong>.NET Core Engineer</strong>
                </td>
                <td>XYZ Solutions</td>
                <td>08-Jul-2025</td>
                <td>
                  <span className="badge bg-success">Selected</span>
                </td>
                <td>
                  <div className="progress" style={{ height: 8 }}>
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <small>100% Complete</small>
                </td>
                <td>
                  <button className="btn btn-sm btn-primary">View</button>
                </td>
              </tr>
              <tr className="align-middle">
                <td>3</td>
                <td>
                  <strong>QA Tester</strong>
                </td>
                <td>Qwerty Ltd</td>
                <td>10-Jul-2025</td>
                <td>
                  <span className="badge bg-danger">Rejected</span>
                </td>
                <td>
                  <div className="progress" style={{ height: 8 }}>
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "20%" }}
                    />
                  </div>
                  <small>20% Complete</small>
                </td>
                <td>
                  <button className="btn btn-sm btn-secondary" disabled="">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* /.card-body */}
      </div>
    </div>
  );
};

export default JobTrackingIndex;
