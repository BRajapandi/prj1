import { useEffect } from "react";
import Login from "./Components/Login/Login";
import VerifyOtp from "./Components/Verify_OTP/VerifyOTP";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddProduct from "./Components/AddProducts/AddProduct";
import AddCustomer from "./Components/AddCustomer/AddCustomer";
import ProductList from "./Components/ProductList/productList";
import CustomerList from "./Components/customerList/customerList";
import Nav from "./Components/Nav/NavBar";
import Aos from "aos";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import AuthWrapper from "./Components/AuthWrapper/AuthWrapper";
import ChangePin from "./Components/ChangePin/ChangePin";
import ImageUploader from "./Components/ImageUploader/index";
import { ToastContainer } from "react-toastify";
import axios from "axios";

function App() {
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 0 });
  }, []);
  axios.defaults.baseURL = "http://ns6887.cms504.com:9090/api/v1";
  axios.defaults.headers.common["Authorization"] = "token";
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<AuthWrapper />}
          loader={<div>Loading...</div>}
        >
          <Route element={<Login />} path="" loader={<div>Loading...</div>} />
          <Route
            element={<VerifyOtp />}
            path="verify-otp"
            loader={<div>Loading...</div>}
          />
          <Route
            element={<ChangePin />}
            path="change-pin"
            loader={<div>Loading...</div>}
          />
        </Route>
        <Route path="/" element={<Nav />} loader={<div>Loading...</div>}>
          <Route
            path="dashboard"
            element={<Dashboard />}
            loader={<div>Loading...</div>}
          />
          <Route
            path="add-product"
            element={<AddProduct />}
            loader={<div>Loading...</div>}
          />
          <Route
            path="add-customer"
            element={<AddCustomer />}
            loader={<div>Loading...</div>}
          />
          <Route
            path="product-list"
            element={<ProductList />}
            loader={<div>Loading...</div>}
          />
          <Route
            path="customer-list"
            element={<CustomerList />}
            loader={<div>Loading...</div>}
          />
          <Route element={<NotFound />} path="*" />
        </Route>
        <Route element={<NotFound />} path="*" />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
