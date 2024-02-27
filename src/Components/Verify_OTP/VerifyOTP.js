import CutButton from "../../asserts/button";
import Wrapper from "./VerifyStyle";
import OtpInput from "react-otp-input";
import logo from "../../asserts/images/logo.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function VerifyOTP() {
  const [userAuth, setUserAuth] = useState({
    mobileNumber: "",
    countryCode: "91",
    otpType: "CHANGE_PIN",
    otpSentBool: false,
  });
  const [userErr, setUserErr] = useState({
    errorField: "",
    errorMsg: "",
  });
  const [otp, setOtp] = useState("");
  let navigate = useNavigate();

  const ValidateOTP = () => {
    if (otp.length != 6) {
      toast.warn("Invalid OTP");
    } else {
      axios({
        method: "post",
        url: "/verify-otp",
        data: {
          ...userAuth,
          otp,
        },
        headers: {
          // 'Authorization': `bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((e) => {
          console.log(e, e?.data?.responseMsg);
          toast.info(e?.data?.responseMsg);
          navigate("/change-pin");
        })
        .catch((e) => {
          toast.error(e?.response?.data?.responseMsg);
        });
    }
  };
  const handleUserDetail = (e) => {
    let value = e.target.value;
    let element = e.target.id;
    setUserAuth((e) => ({ ...e, [element]: value }));
    setUserErr({ errField: "", errMsg: "" });
  };
  const ValidateUser = () => {
    //   userAuth.mobileNumber.match(/0{5,}/)

    if (!userAuth.mobileNumber.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
      setUserErr({
        errorField: "mobileNumber",
        errorMsg: "Invalid Mobile Number",
      });
    } else {
      axios({
        method: "post",
        url: "/send-otp",
        data: userAuth,
        headers: {
          // 'Authorization': `bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((e) => {
          console.log(e, e?.data?.responseMsg);
          toast.info(e?.data?.responseMsg);
          setUserAuth((e) => ({ ...e, otpSentBool: true }));
        })
        .catch((e) => {
          toast.error(e?.response?.data?.responseMsg);
        });
    }
  };
  return (
    <Wrapper className="col-12 col-sm-5">
      <img src={logo} alt="Company Logo" className="forgotLogo" />
      <h3 className="forgotTitle" data-aos="fade-up">
        Forgot Password :(
      </h3>
      <span className="forgotSubTitle" data-aos="fade-up" data-aos-delay="150">
        Enter OTP to Continue
      </span>
      <div
        className="form-floating mb-3"
        data-aos="fade-up"
        data-aos-delay="300"
        style={{ width: "80%" }}
      >
        <input
          type="text"
          className={`form-control ${
            userErr.errorField === "mobileNumber" ? "is-invalid" : ""
          }`}
          id="mobileNumber"
          placeholder="Mobile Number"
          value={userAuth.mobileNumber}
          onChange={handleUserDetail}
          maxLength="10"
          disabled={userAuth.otpSentBool}
        />
        <label htmlFor="mobileNumber">Mobile Number</label>
        <div className="invalid-feedback">{userErr.errorMsg}</div>
      </div>
      <div
        className=""
        data-aos="fade-up"
        data-aos-delay="350"
        style={{ width: "80%" }}
      >
        <select
          className="form-select mb-3"
          aria-label="Large select example"
          value={userAuth.countryCode}
          id="countryCode"
          onChange={handleUserDetail}
          disabled={userAuth.otpSentBool}
        >
          <option value="91">India</option>
          <option value="92">UK</option>
          <option value="93">Srilanka</option>
        </select>
      </div>
      {!userAuth.otpSentBool ? (
        <div data-aos="fade-up" data-aos-delay="400">
          <CutButton clickFunction={ValidateUser}>Send</CutButton>
        </div>
      ) : (
        <>
          <div
            className="wrapperOtp"
            data-aos="fade-up"
            data-aos-delay="400"
            style={{ width: "80%" }}
          >
            <OtpInput
              value={otp}
              inputStyle={{ height: "38px", width: "38px", marginRight: "1px" }}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="450">
            <CutButton clickFunction={ValidateOTP}>Verify</CutButton>
          </div>
        </>
      )}
    </Wrapper>
  );
}
export default VerifyOTP;
