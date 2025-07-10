import React from 'react'

const CompanyProfile = () => {
  return (
    <section style={{ backgroundColor: "#f8f9fa" }}>
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="Company Logo"
              className="rounded-circle img-fluid"
              style={{ width: 150 }}
            />
            <h5 className="my-3">ABC Technologies Pvt Ltd</h5>
            <p className="text-muted mb-1">IT Services &amp; Solutions</p>
            <p className="text-muted mb-4">Ahmedabad, Gujarat, India</p>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Company Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">ABC Technologies Pvt Ltd</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">contact@abctech.com</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">+91 9876543210</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Industry</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Information Technology</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Website</p>
              </div>
              <div className="col-sm-9">
                <a
                  href="https://www.abctech.com"
                  target="_blank"
                  className="text-decoration-none"
                >
                  www.abctech.com
                </a>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">
                  101 Tech Park, SG Highway, Ahmedabad, Gujarat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default CompanyProfile