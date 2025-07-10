import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SearchJobsIndex = () => {
const [availableJobs,setAvailablejobs]=useState([]);
  useEffect(()=>{
const requestOptions = {
  method: "GET",
  // redirect: "follow"
};

fetch("http://localhost:5000/posts", requestOptions)
  .then((response) => response.text())
  .then((result) => setAvailablejobs(JSON.parse(result)))
  .catch((error) => console.error("error",error));
  },[])
  return (
   <>
     <div className="row mt-4">
    <div className="col-9">
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Search jobs"
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
        <h3 className="card-title">Available Jobs{JSON.stringify(availableJobs)}</h3>
      </div>
      {/* /.card-header */}
      <div className="card-body p-0">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>CTC / Package</th>
              <th>Valid Till</th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td>Software Developer</td>
              <td>TCS Technologies</td>
              <td>Bangalore, India</td>
              <td>6.5 LPA</td>
              <td>31-Aug-2025</td>
              <td>
                <Link to="jobdetail" className="btn btn-sm btn-info">View</Link>
                <button className="btn btn-sm btn-success">Apply</button>
              </td>
            </tr>
            <tr className="align-middle">
              <td>Software Developer</td>
              <td>TCS Technologies</td>
              <td>Bangalore, India</td>
              <td>6.5 LPA</td>
              <td>31-Aug-2025</td>
              <td>
                <button className="btn btn-sm btn-info">View</button>
                <button className="btn btn-sm btn-success">Apply</button>
              </td>
            </tr>
            <tr className="align-middle">
              <td>Software Developer</td>
              <td>TCS Technologies</td>
              <td>Bangalore, India</td>
              <td>6.5 LPA</td>
              <td>31-Aug-2025</td>
              <td>
                <button className="btn btn-sm btn-info">View</button>
                <button className="btn btn-sm btn-success">Apply</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
  </div>
   </>
  )
}

export default SearchJobsIndex