import { useState } from "react";
import Wrapper from "./LoginStyle";
import CutButton from "../../asserts/button/index";
import logo from "../../asserts/images/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const initalState = {
  mobileNumber: "",
  password: "",
  countryCode: "91",
};
function Login() {
  const [userDetail, setUserDetail] = useState(initalState);
  const [error, setError] = useState({ errField: "", errMsg: "" });
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  let navigate = useNavigate();
  const handleUserDetail = (e) => {
    let value = e.target.value;
    let element = e.target.id;
    setUserDetail((e) => ({ ...e, [element]: value }));
    setError({ errField: "", errMsg: "" });
  };
  const validateUser = () => {
    axios({
      method: "post",
      url: "/login",
      data: userDetail,
      headers: {
        // 'Authorization': `bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((e) => {
        let data = e.data.content;
        localStorage.setItem("authToken", data.access_token);
        localStorage.setItem("userDet", JSON.stringify(data.user));

        toast.warn("Login successfully");
        setTimeout(() => {
          navigate("/add-product");
        }, 1000);
      })
      .catch((e) => {
        toast.error(e?.response?.data?.responseMsg);
      });
  };
  return (
    <Wrapper className="col-12 col-sm-5">
      <div className="loginLogo">
        <img src={logo} alt="Company Logo" />
      </div>
      <h3 className="loginTitle" data-aos="fade-up">
        Welcome Back :)
      </h3>
      <span className="loginSubTitle" data-aos="fade-up" data-aos-delay="150">
        Login to continue
      </span>
      <div
        className="form-floating mb-3"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <input
          type="text"
          className={`form-control ${
            error.errField === "mobileNumber" ? "is-invalid" : ""
          }`}
          id="mobileNumber"
          placeholder="Mobile Number"
          value={userDetail.mobileNumber}
          onChange={handleUserDetail}
        />
        <label htmlFor="mobileNumber">Mobile Number</label>
        <div className="invalid-feedback">{error.errMsg}</div>
      </div>
      <div
        className="form-floating mb-3"
        data-aos="fade-up"
        data-aos-delay="450"
      >
        <input
          type="password"
          className={`form-control ${
            error.errField === "password" ? "is-invalid" : ""
          }`}
          id="password"
          placeholder="Password"
          value={userDetail.password}
          onChange={handleUserDetail}
        />
        <label htmlFor="password">Password</label>
        <div className="invalid-feedback">{error.errMsg}</div>
      </div>
      <div className="mb-4" data-aos="fade-up" data-aos-delay="550">
        <select
          className="form-select  mb-3"
          aria-label="Large select example"
          value={userDetail.countryCode}
          id="countryCode"
        >
          <option value="91">India</option>
          <option value="92">UK</option>
          <option value="93">Srilanka</option>
        </select>
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <CutButton clickFunction={validateUser}>Login</CutButton>
      </div>
      <div data-aos="fade-up" data-aos-delay="750" className="forgotstyle">
        <Link to="/verify-otp">Forgot Password ?</Link>
      </div>
    </Wrapper>
  );
}
export default Login;
