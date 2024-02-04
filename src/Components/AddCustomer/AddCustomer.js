import Wrapped from "./AddCustStyle";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function AddCustomer() {
  return (
    <Wrapped>
      <div className="container-fluid">
        <header>Add Customer</header>
        <div className="row">
          <div class="col-md-4">
            <label for="Name" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" id="Name" />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="userName" class="form-label">
              User Name
            </label>
            <input type="text" class="form-control" id="userName" />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="email" class="form-label">
              Email ID
            </label>
            <input type="text" class="form-control" id="email" />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4">
            <label for="password" class="form-label">
              Password
            </label>
            <div className="input-group">
              <input type="password" class="form-control" id="password" />
              <span class="input-group-text">
                <BsFillEyeSlashFill />
              </span>
              <div class="valid-feedback">Looks good!</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapped>
  );
}
export default AddCustomer;