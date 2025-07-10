import React from 'react'
import { Link } from 'react-router-dom'

const StudentListingIndex = () => {
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
        <h3 className="card-title">Registered Students</h3>
      </div>
      {/* /.card-header */}
      <div className="card-body p-0">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th style={{ width: "5%" }}>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Degree</th>
              <th>Mobile No.</th>
              <th style={{ width: 140 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td>B.Tech Computer Science</td>
              <td>1234567890</td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-sm btn-outline-secondary dropdown-toggle w-100"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                    <li>
                      <Link className="dropdown-item" to="profile">
                        <i className="bi bi-eye me-2" /> View Details
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-download me-2" /> Download Resume
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td>B.Tech Computer Science</td>
              <td>1234567890</td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-sm btn-outline-secondary dropdown-toggle w-100"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                    <li>
                      <a className="dropdown-item" href="">
                        <i className="bi bi-eye me-2" /> View Details
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-download me-2" /> Download Resume
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>1.</td>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td>B.Tech Computer Science</td>
              <td>1234567890</td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-sm btn-outline-secondary dropdown-toggle w-100"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Actions
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                    <li>
                      <Link className="dropdown-item" to="">
                        <i className="bi bi-eye me-2" /> View Details
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="bi bi-download me-2" /> Download Resume
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

export default StudentListingIndex