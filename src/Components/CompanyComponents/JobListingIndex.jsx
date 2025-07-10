import React from 'react'
import { Link } from 'react-router-dom'

const JobListingIndex = () => {
  return (
      <div className="app-content">
  {/* Search Bar and Add Job Button */}
  <div className="row mt-4">
    <div className="col-md-9">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search jobs by title, location, or type"
        />
      </div>
    </div>
    <div className="col-md-3">
      <div className="mb-3">
        <button type="button" className="btn btn-success w-100">
          Search
        </button>
      </div>
    </div>
  </div>
  {/* Job Listing Table */}
  <div className="col-md-12 mt-2">
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">
        <h3 className="card-title mb-0">Job Listings</h3>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped mb-0">
          <thead className="table-light">
            <tr>
              <th style={{ width: 50 }}>#</th>
              <th>Job Title</th>
              <th>Location</th>
              <th>Type</th>
              <th>Openings</th>
              <th>Posted Date</th>
              <th>Student Applied</th>
              <th>Status</th>
              <th style={{ width: 150 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td>1</td>
              <td>Frontend Developer - React.js</td>
              <td>Ahmedabad</td>
              <td>
                <span className="badge bg-dark">Part Time</span>
              </td>
              <td>3</td>
              <td>05-Jul-2025</td>
              <td>
                <Link
                  to="viewstudent"
                  className="btn btn-sm btn-primary"
                >
                  View Student
                </Link>
              </td>
              <td>
                <span className="badge bg-danger">Closed</span>
              </td>
              <td>
                <div className="d-flex flex-wrap gap-1">
                  <Link
                    to="editjob"
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                  {/* <a href="#" class="btn btn-sm btn-danger">Delete</a> */}
                  <Link
                    to="viewjob"
                    className="btn btn-sm btn-secondary"
                  >
                    View
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="align-middle">
              <td>2</td>
              <td>Frontend Developer - React.js</td>
              <td>Ahmedabad</td>
              <td>
                <span className="badge bg-info">Full Time</span>
              </td>
              <td>3</td>
              <td>05-Jul-2025</td>
              <td>
                <a
                  href="./comp-studentlisting.html"
                  className="btn btn-sm btn-primary"
                >
                  View Student
                </a>
              </td>
              <td>
                <span className="badge bg-success">Active</span>
              </td>
              <td>
                <div className="d-flex flex-wrap gap-1">
                  <a href="#" className="btn btn-sm btn-primary">
                    Edit
                  </a>
                  {/* <a href="#" class="btn btn-sm btn-danger">Delete</a> */}
                  <a href="#" className="btn btn-sm btn-secondary">
                    View
                  </a>
                </div>
              </td>
            </tr>
            {/* Repeat rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default JobListingIndex