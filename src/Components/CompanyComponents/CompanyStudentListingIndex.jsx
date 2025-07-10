import React from 'react'
import { Link } from 'react-router-dom'

const CompanyStudentListingIndex = () => {
  return (
     <div className="app-content">
  <div className="row mt-4">
    <div className="col-9">
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Search Students"
        />
      </div>
    </div>
    <div className="col-3">
      <div className="mb-3">
        <button type="button" className="btn btn-primary mb-2 w-100">
          Search
        </button>
      </div>
    </div>
  </div>
  <div className="col-md-12 mt-2">
    <div className="card mb-4">
      <div className="card-header">
        <h3 className="card-title">Student listing</h3>
      </div>
      {/* /.card-header */}
      <div className="card-body p-0">
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: 10 }}>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Degree</th>
              <th>Applied On</th>
              <th>Status</th>
              <th style={{ width: 100 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td>1.</td>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td>B.Tech Computer Science</td>
              <td>5th July 2025</td>
              <td>
                <span className="badge bg-warning">Pending</span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-sm btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" to="viewstudentdetail">
                        View Details
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Approve
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Reject
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Download Resume
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr className="align-middle">
              <td>2.</td>
              <td>Jane Smith</td>
              <td>jane.smith@example.com</td>
              <td>MCA</td>
              <td>3rd July 2025</td>
              <td>
                <span className="badge bg-success">Approved</span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-sm btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        View Details
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Revert Approval
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Download Resume
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr className="align-middle">
              <td>3.</td>
              <td>Rahul Verma</td>
              <td>rahul.verma@example.com</td>
              <td>B.Sc IT</td>
              <td>1st July 2025</td>
              <td>
                <span className="badge bg-danger">Rejected</span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-sm btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton3"
                  >
                    <li>
                      <Link className="dropdown-item" to="viewstudentdetail">
                        View Details
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Reconsider
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Download Resume
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
  </div>
</div>
  )
}

export default CompanyStudentListingIndex