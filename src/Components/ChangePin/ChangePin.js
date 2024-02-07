import { useState } from "react";
import Wrapped from "./ChangePinStyle";
import CutButton from "../../asserts/button";
import { useNavigate } from "react-router-dom";
import logo from "../../asserts/images/logo.jpeg";

const initalState = {
  pin: "",
  ConfirmPIN: "",
};

function ChangePin() {
  const [userDetail, setUserDetail] = useState(initalState);
  const [error, setError] = useState({ errField: "", errMsg: "" });
  let navigate = useNavigate();

  return (
    <Wrapped className="col-12 col-sm-5">
      <div className="confirmLogo">
        <img src={logo} alt="Company Logo" />
      </div>
      <h3 className="changePinTitle" data-aos="fade-up">
        Change PIN
      </h3>
      <span
        className="changePinSubTitle"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Enter Your PIN To Continue
      </span>
      <div class="form-floating mb-4" data-aos="fade-up" data-aos-delay="300">
        <input
          type="text"
          className={`form-control ${
            error.errField === "pin" ? "is-invalid" : ""
          }`}
          id="pin"
          placeholder="PIN"
          value={userDetail.pin}
        />
        <label for="pin">PIN</label>
        <div class="invalid-feedback">{error.errMsg}</div>
      </div>
      <div class="form-floating mb-4" data-aos="fade-up" data-aos-delay="450">
        <input
          type="text"
          className={`form-control ${
            error.errField === "ConfirmPIN" ? "is-invalid" : ""
          }`}
          id="ConfirmPIN"
          placeholder="Confirm PIN"
          value={userDetail.ConfirmPIN}
        />
        <label for="ConfirmPIN">Confirm PIN</label>
        <div class="invalid-feedback">{error.errMsg}</div>
      </div>
      <div data-aos="fade-up" data-aos-delay="600">
        <CutButton clickFunction={() => navigate("/")}>Confirm</CutButton>
      </div>
    </Wrapped>
  );
}
export default ChangePin;
