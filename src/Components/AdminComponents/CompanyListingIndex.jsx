import React from 'react'
import { Link } from 'react-router-dom'

const CompanyListingIndex = () => {
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
        <h3 className="card-title">Registered Companies</h3>
      </div>
      {/* /.card-header */}
      <div className="card-body p-0">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th style={{ width: "5%" }}>#</th>
              <th>Company Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Industry</th>
              <th>Jobs Posted</th>
              <th>Registered On</th>
              {/* <th>Status</th> */}
              <th style={{ width: 150 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>ABC Technologies</td>
              <td>contact@abctech.com</td>
              <td>+91 9876543210</td>
              <td>IT Services</td>
              <td>12</td>
              <td>15th June 2025</td>
              {/* <td>
  <span class="badge rounded-pill bg-success">Active</span>
</td> */}
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-sm btn-outline-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="companyprofile">
                        {" "}
                        View Profile
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        Approve
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Reject
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="joblisting">
                        {" "}
                        View Job Listings
                      </Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>XYZ Solutions</td>
              <td>hr@xyzsolutions.com</td>
              <td>+91 9123456780</td>
              <td>Finance</td>
              <td>8</td>
              <td>20th May 2025</td>
              {/* <td>
  <span class="badge rounded-pill bg-warning text-dark">Pending</span>
</td> */}
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-sm btn-outline-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        View Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
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
                        {" "}
                        View Job Listings
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>PQR Infotech</td>
              <td>pqr.hr@example.com</td>
              <td>+91 9988776655</td>
              <td>Manufacturing</td>
              <td>5</td>
              <td>1st July 2025</td>
              {/* <td>
  <span class="badge rounded-pill bg-danger">Inactive</span>
</td> */}
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-sm btn-outline-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
                        View Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {" "}
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
                        {" "}
                        View Job Listings
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

export default CompanyListingIndex