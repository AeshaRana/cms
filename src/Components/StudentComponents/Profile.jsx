import React from "react";

const Profile = () => {
  return (
    <div className="app-content">
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                  <h5 className="my-3">John Smith</h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  {/* <div class="d-flex justify-content-center mb-2">
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-primary"
                  >
                    Follow
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-outline-primary ms-1"
                  >
                    Message
                  </button>
                </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        Bay Area, San Francisco, CA
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Gender</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Male</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Date Of Birth</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">07/08/2004</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Github</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Github Link</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">LinkedIn Profile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">LinkedIn Profile URL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="card card-info card-outline mb-4">
        {/*begin::Header*/}
        <div className="card-header">
          <div className="card-title">Edit Profile</div>
        </div>
        {/*end::Header*/}
        {/*begin::Form*/}
        <form className="needs-validation" noValidate="">
          {/*begin::Body*/}
          <div className="card-body">
            {/*begin::Row*/}
            <div className="row g-3">
              {/*begin::Col*/}
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  defaultValue="Mark"
                  required=""
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6">
                <label htmlFor="validationCustom02" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  defaultValue="Otto"
                  required=""
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6">
                <label
                  htmlFor="validationCustomUsername"
                  className="form-label"
                >
                  Mobile No<span className="text-danger">*</span>
                </label>
                <div className="input-group has-validation">
                  <input
                    type="tel"
                    className="form-control"
                    id="validationCustomMobileNo"
                    aria-describedby="inputGroupPrepend"
                    placeholder="Enter 10-digit mobile number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
              {/*end::Col*/}
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  Date Of Birth<span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  required=""
                />
                <div className="invalid-feedback">
                  Please provide a valid DOB.
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  Gender<span className="text-danger">*</span>
                </label>
                <select className="form-select" id="gender" required="">
                  <option selected="" disabled="" value="">
                    Choose...
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <div className="invalid-feedback">Please select gender.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  Address1<span className="text-danger">*</span>
                </label>
                <input
                  type="textarea"
                  className="form-control"
                  id="validationCustom03"
                  required=""
                />
                <div className="invalid-feedback">Please provide Address1.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  Address2
                </label>
                <input
                  type="textarea"
                  className="form-control"
                  id="validationCustom03"
                  required=""
                />
                <div className="invalid-feedback">Please provide Address2.</div>
              </div>
              {/*begin::Col*/}
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  City<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required=""
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6">
                <label htmlFor="validationCustom04" className="form-label">
                  State<span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  id="validationCustom04"
                  required=""
                >
                  <option selected="" disabled="" value="">
                    Choose...
                  </option>
                  <option>...</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6">
                <label htmlFor="validationCustom05" className="form-label">
                  Zip<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  required=""
                />
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-md-6">
                <label htmlFor="validationCustom05" className="form-label">
                  Github
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  required=""
                />
                <div className="invalid-feedback">
                  Please provide a githyb link.
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom05" className="form-label">
                  LinkedIn
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom05"
                  required=""
                />
                <div className="invalid-feedback">
                  Please provide a LinkedIn link.
                </div>
              </div>
              <div className="col-md-12">
                <label htmlFor="validationCustom05" className="form-label">
                  Upload Resume<span className="text-danger">*</span>
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile02"
                />
                <div className="invalid-feedback">
                  Please provide a valid file.
                </div>
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
          </div>
          {/*end::Body*/}
          {/*begin::Footer*/}
          <div className="card-footer">
            <button className="btn btn-info" type="submit">
              Update Profile
            </button>
          </div>
          {/*end::Footer*/}
        </form>
        {/*end::Form*/}
        {/*begin::JavaScript*/}
        {/*end::JavaScript*/}
      </div>
    </div>
  );
};

export default Profile;
