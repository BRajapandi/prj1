import Wrapper from "./AuthStyle";
import LoginIcon from "../../asserts/svgs/LoginIcon";
import logo from "../../asserts/images/logo.jpeg";
import { Outlet } from "react-router-dom";
function AuthWrapper() {
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-7 loginLeftCard">
            <div className="logoStyle">
              <img src={logo} alt="Company Name" />
            </div>
            <div className="iconStyle">
              <LoginIcon />
            </div>
          </div>
          <>
            <Outlet />
          </>
        </div>
      </div>
    </Wrapper>
  );
}
export default AuthWrapper;
