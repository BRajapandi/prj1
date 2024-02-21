import Wrapped from "./AddCustStyle";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function AddCustomer() {
  return (
    <Wrapped>
      <div className="container-fluid">
        <header>Add Customer</header>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4 mb-4">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="Name" />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mb-4">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input type="text" className="form-control" id="userName" />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mb-4">
            <label htmlFor="email" className="form-label">
              Email ID
            </label>
            <input type="text" className="form-control" id="email" />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input type="password" className="form-control" id="password" />
              <span className="input-group-text">
                <BsFillEyeSlashFill />
              </span>
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div
            className="col-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button className="btn clear">Clear</button>
            <button className="btn upload">Upload</button>
          </div>
        </div>
      </div>
    </Wrapped>
  );
}
export default AddCustomer;
