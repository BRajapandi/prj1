import CutButton from "../../asserts/button";
import Wrapper from "./VerifyStyle";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {
  const [otp, setOtp] = useState("");
  let navigate = useNavigate();

  return (
    <Wrapper className="col-5">
      <h3 className="forgotTitle" data-aos="fade-up">
        Forgot Password :(
      </h3>
      <span className="forgotSubTitle">Enter OTP to Continue</span>
      <div className="wrapperOtp">
        <OtpInput
          value={otp}
          inputStyle={{ height: "40px", width: "40px", margin: "0px 4px" }}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <CutButton clickFunction={() => navigate("/change-pin")}>
          Verify
        </CutButton>
      </div>
    </Wrapper>
  );
}
export default VerifyOTP;
