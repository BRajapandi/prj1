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

function App() {
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 1000, offset: 0 });
  }, []);
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<AuthWrapper />}>
        <Route element={<Login />} path="" />
        <Route element={<VerifyOtp />} path="verify-otp" />
        <Route element={<ChangePin />} path="change-pin" />
      </Route>
      <Route path="/" element={<Nav />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="add-customer" element={<AddCustomer />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="customer-list" element={<CustomerList />} />
        <Route element={<NotFound />} path="*" />
      </Route>
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
