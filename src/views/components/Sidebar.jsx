import "../../styles/sidebar.scss";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import CarRepairOutlinedIcon from "@mui/icons-material/CarRepairOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext.js";
import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await signOut(auth); // Sign out using Firebase auth

      // Update the state to logout the user
      dispatch({ type: "LOGOUT" });

      // Redirect to the login page
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">AutoHub</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <button>
              <Link to="/" style={{ textDecoration: "none", color: "#888" }}>
                <span>
                  <DashboardCustomizeOutlinedIcon className="icon" />
                  Dashboard
                </span>
              </Link>
            </button>
          </li>
          <p className="title">LISTS</p>
          <li>
            <button>
              <Link
                to="/suppliers"
                style={{ textDecoration: "none", color: "#888" }}
              >
                <span>
                  <CarRepairOutlinedIcon className="icon" />
                  Suppliers
                </span>
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link
                to="/mechanics"
                style={{ textDecoration: "none", color: "#888" }}
              >
                <span>
                  <HomeRepairServiceOutlinedIcon className="icon" />
                  Mechanics
                </span>
              </Link>
            </button>
          </li>
          <li>
            <button>
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "#888" }}
              >
                <span>
                  <StorefrontOutlinedIcon className="icon" />
                  Products
                </span>
              </Link>
            </button>
          </li>
          <li>
            <button>
              <span>
                <AddCardOutlinedIcon className="icon" />
                Orders
              </span>
            </button>
          </li>
          <li>
            <button>
              <span>
                <LocalShippingOutlinedIcon className="icon" />
                Delivery
              </span>
            </button>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <button>
              <span>
                <AnalyticsOutlinedIcon className="icon" />
                Stats
              </span>
            </button>
          </li>

          <p className="title">USER</p>
          <li>
            <button>
              <span>
                <AccountBoxOutlinedIcon className="icon" />
                Profile
              </span>
            </button>
          </li>
          <li>
            <button>
              <span>
                <SettingsSuggestOutlinedIcon className="icon" />
                Settings
              </span>
            </button>
          </li>
          <li>
            <button onClick={handleLogout}>
              <span>
                <ExitToAppOutlinedIcon className="icon" />
                Logout
              </span>
            </button>
          </li>
        </ul>
      </div>
      <hr />
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
