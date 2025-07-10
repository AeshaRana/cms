import React from 'react'

const AddJob = () => {
  return (
    <div className="app-content">
    <div className="card card-info card-outline mb-4 mt-4">
    {/*begin::Header*/}
    <div className="card-header">
      <div className="card-title">Add / Edit Job</div>
    </div>
    {/*end::Header*/}
    {/*begin::Form*/}
    <form className="needs-validation" noValidate="">
      {/*begin::Body*/}
      <div className="card-body">
        <div className="row g-3">
          {/* Job Title (Required) */}
          <div className="col-md-6">
            <label htmlFor="jobTitle" className="form-label">
              Job Title<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="jobTitle"
              placeholder="Frontend Developer - React.js"
              required=""
            />
            <div className="invalid-feedback">Job Title is required.</div>
          </div>
          {/* Company Name (Required) */}
          <div className="col-md-6">
            <label htmlFor="companyName" className="form-label">
              Company Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              placeholder="ABC Technologies Pvt Ltd"
              required=""
            />
            <div className="invalid-feedback">Company Name is required.</div>
          </div>
          {/* Job Type (Required) */}
          <div className="col-md-6">
            <label htmlFor="jobType" className="form-label">
              Job Type<span className="text-danger">*</span>
            </label>
            <select className="form-select" id="jobType" required="">
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
            <div className="invalid-feedback">Please select a Job Type.</div>
          </div>
          {/* Work Mode (Required) */}
          <div className="col-md-6">
            <label htmlFor="workMode" className="form-label">
              Work Mode<span className="text-danger">*</span>
            </label>
            <select className="form-select" id="workMode" required="">
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option>Onsite</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
            <div className="invalid-feedback">Please select a Work Mode.</div>
          </div>
          {/* Location (Required) */}
          <div className="col-md-6">
            <label htmlFor="location" className="form-label">
              Location<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Ahmedabad, India"
              required=""
            />
            <div className="invalid-feedback">Location is required.</div>
          </div>
          {/* Salary Range (Optional) */}
          <div className="col-md-6">
            <label htmlFor="salaryRange" className="form-label">
              Salary Range
            </label>
            <input
              type="text"
              className="form-control"
              id="salaryRange"
              placeholder="₹6 - 8 LPA"
            />
          </div>
          {/* Experience Required (Required) */}
          <div className="col-md-6">
            <label htmlFor="experience" className="form-label">
              Experience Required<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="experience"
              placeholder="2-4 years"
              required=""
            />
            <div className="invalid-feedback">Experience is required.</div>
          </div>
          {/* Number of Openings (Required) */}
          <div className="col-md-6">
            <label htmlFor="openings" className="form-label">
              Number of Openings<span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="openings"
              placeholder={3}
              required=""
            />
            <div className="invalid-feedback">
              Number of openings is required.
            </div>
          </div>
          {/* Application Deadline (Required) */}
          <div className="col-md-6">
            <label htmlFor="deadline" className="form-label">
              Application Deadline<span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              id="deadline"
              required=""
            />
            <div className="invalid-feedback">Deadline date is required.</div>
          </div>
          {/* Job Description (Required) */}
          <div className="col-12">
            <label htmlFor="description" className="form-label">
              Job Description<span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              id="description"
              rows={4}
              placeholder="Enter detailed job description here..."
              required=""
              defaultValue={""}
            />
            <div className="invalid-feedback">
              Please enter a Job Description.
            </div>
          </div>
          {/* Requirements (Required) */}
          <div className="col-12">
            <label htmlFor="requirements" className="form-label">
              Requirements<span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              id="requirements"
              rows={3}
              placeholder="Enter required skills, education, etc."
              required=""
              defaultValue={""}
            />
            <div className="invalid-feedback">
              Please enter Job Requirements.
            </div>
          </div>
          {/* Perks & Benefits (Optional) */}
          <div className="col-12">
            <label htmlFor="benefits" className="form-label">
              Perks &amp; Benefits
            </label>
            <textarea
              className="form-control"
              id="benefits"
              rows={2}
              placeholder="Enter any perks or benefits (optional)"
              defaultValue={""}
            />
          </div>
          {/* Status (Required) */}
          <div className="col-md-6">
            <label htmlFor="status" className="form-label">
              Status<span className="text-danger">*</span>
            </label>
            <select className="form-select" id="status" required="">
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <div className="invalid-feedback">Please select Job Status.</div>
          </div>
          {/* Upload Company Logo (Optional) */}
          <div className="col-md-6">
            <label htmlFor="uploadLogo" className="form-label">
              Upload Company Logo
            </label>
            <input type="file" className="form-control" id="uploadLogo" />
          </div>
        </div>
      </div>
      {/*end::Body*/}
      {/*begin::Footer*/}
      {/* Save Job Button */}
      <div className="card-footer">
        <button className="btn btn-primary w-100" type="button" id="saveJobBtn">
          Save Job
        </button>
      </div>
      {/* Toast Container */}
      <div
        className="position-fixed bottom-0 end-0 p-3"
        style={{ zIndex: 9999 }}
      >
        <div
          id="saveJobToast"
          className="toast align-items-center text-bg-success border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">Job saved successfully!</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
        </div>
      </div>
      {/* <button type="button" class="btn btn-primary mb-2" data-bs-toggle="toast" data-bs-target="toastPrimary">Show
        primary toast</button> */}
      {/*end::Footer*/}
    </form>
    {/*end::Form*/}
    {/*begin::JavaScript*/}
    {/*end::JavaScript*/}
  </div>
</div>

  )
}

export default AddJob