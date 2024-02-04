import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Wrapped from "./navStyle";
import logo from "../../asserts/images/logo.jpeg";
import { BsPersonFillAdd } from "react-icons/bs";
import { TbReport, TbShoppingCartCog } from "react-icons/tb";
import { IoBagAdd } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

function NavBar() {
  let { pathname } = useLocation();
  let navigate = useNavigate();

  return (
    <Wrapped>
      <div className="header">
        <div className="imgWrapper">
          <img src={logo} alt="company logo" />
        </div>
        <span className="logout" onClick={() => navigate("/")}>
          Logout&nbsp;
          <AiOutlineLogout />
        </span>
      </div>
      <div className="NavBody">
        <div className="sideNav">
          <div className="title">Menu</div>
          <nav className="nav-list">
            <Link
              to="/dashboard"
              className={`navlink ${pathname === "/dashboard" && "active"}`}
            >
              <TbReport />
              &nbsp;&nbsp;Dashboard
            </Link>
            <Link
              className={`navlink ${pathname === "/add-product" && "active"}`}
              to="/add-product"
            >
              <IoBagAdd />
              &nbsp;&nbsp;Add Product
            </Link>
            <Link
              to="/add-customer"
              className={`navlink ${pathname === "/add-customer" && "active"}`}
            >
              <BsPersonFillAdd />
              &nbsp;&nbsp;Add Customer
            </Link>
            <Link
              className={`navlink ${pathname === "/product-list" && "active"}`}
              to="/product-list"
            >
              <TbShoppingCartCog />
              &nbsp;&nbsp;Product List
            </Link>
            <Link
              to="/customer-list"
              className={`navlink ${pathname === "/customer-list" && "active"}`}
            >
              <IoIosPeople />
              &nbsp;&nbsp;Customer List
            </Link>
          </nav>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </Wrapped>
  );
}
export default NavBar;
