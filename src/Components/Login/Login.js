import { useState } from "react";
import Wrapper from "./LoginStyle";
import CutButton from "../../asserts/button/index";
import LoginIcon from "../../asserts/svgs/LoginIcon";
import logo from "../../asserts/images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";

const initalState = {
  emailId: "",
  password: "",
};
function Login() {
  const [userDetail, setUserDetail] = useState(initalState);
  const [error, setError] = useState({ errField: "", errMsg: "" });
  let navigate = useNavigate();

  return (
    <Wrapper className="col-5">
      <h3 className="loginTitle" data-aos="fade-up">
        Welcome Back :)
      </h3>
      <span className="loginSubTitle" data-aos="fade-up" data-aos-delay="150">
        Login to continue
      </span>
      <div class="form-floating mb-4" data-aos="fade-up" data-aos-delay="300">
        <input
          type="email"
          className={`form-control ${
            error.errField === "emailId" ? "is-invalid" : ""
          }`}
          id="emailId"
          placeholder="Email address"
          value={userDetail.emailId}
          // onChange={handleUserDetail}
        />
        <label for="emailId">Email address</label>
        <div class="invalid-feedback">{error.errMsg}</div>
      </div>
      <div class="form-floating mb-4" data-aos="fade-up" data-aos-delay="450">
        <input
          type="password"
          class={`form-control ${
            error.errField === "password" ? "is-invalid" : ""
          }`}
          id="password"
          placeholder="Password"
          value={userDetail.password}
          // onChange={handleUserDetail}
        />
        <label for="password">Password</label>
        <div class="invalid-feedback">{error.errMsg}</div>
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <CutButton clickFunction={() => navigate("/add-product")}>
          Login
        </CutButton>
      </div>
      <div data-aos="fade-up" data-aos-delay="750" className="forgotstyle">
        <Link to="/verify-otp">Forgot Password ?</Link>
      </div>
    </Wrapper>
  );
}
export default Login;
