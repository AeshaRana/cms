import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const body = document.body;
  body.classList.add("login-page");
  body.classList.remove("register-page");
  body.classList.add("login-page");

  const navigate = useNavigate();

  const login = (e) => {
     e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="login-box">
      <div className="login-logo">
        <h2 className="register-box-msg"> Sign In</h2>
      </div>
      {/* /.login-logo */}
      <div className="card">
        <div className="card-body login-card-body">
          {/* <p class="login-box-msg">Sign in to start your session</p> */}
          <form action="../index3.html" method="post">
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
              <div className="col-8">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember Me
                  </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-4">
                <div className="d-grid gap-2">
                  <button
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
          {/* <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p> */}
          <p className="mb-0">
            <Link to="/" className="text-center">
              Register a new membership
            </Link>
          </p>
        </div>
        {/* /.login-card-body */}
      </div>
    </div>
  );
};

export default Login;
