import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const body = document.body;
  body.classList.remove("login-page");
  body.classList.add("register-page");

  const navigate = useNavigate();

  const login = (e) => {
    // After login
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="register-box">
      <div className="register-logo">
        {/* <a href="../index2.html"><b>Admin</b>LTE</a> */}
        <h2 className="register-box-msg">Sign Up</h2>
      </div>
      {/* /.register-logo */}
      <div className="card">
        <div className="card-body register-card-body">
          {/* <p class="register-box-msg">Register a new membership</p> */}
          <form action="../index3.html" method="post">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
              <div className="input-group-text">
                <span className="bi bi-person" />
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <div className="input-group-text">
                <span className="bi bi-envelope" />
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <div className="input-group-text">
                <span className="bi bi-lock-fill" />
              </div>
            </div>
            {/*begin::Row*/}
            <div className="row">
              {/* /.col */}
              <div className="col-12">
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => login(e)}
                  >
                    Sign In
                  </button>
                </div>
              </div>
              {/* /.col */}
            </div>
            {/*end::Row*/}
          </form>
          <div className="social-auth-links text-center mb-3 d-grid gap-2">
            <p>- OR -</p>
            <a href="#" className="btn btn-primary">
              <i className="bi bi-facebook me-2" /> Sign in using Facebook
            </a>
            <a href="#" className="btn btn-danger">
              <i className="bi bi-google me-2" /> Sign in using Google+
            </a>
          </div>
          {/* /.social-auth-links */}
          <p className="mb-0">
            <Link to="/login" className="text-center">
              I already have Sign Up?Login
            </Link>
          </p>
        </div>
        {/* /.register-card-body */}
      </div>
    </div>
  );
};

export default Register;
