import "../../styles/sidebar.scss"
import DayNightToggle from "../components/DayNightToggle";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import CarRepairOutlinedIcon from '@mui/icons-material/CarRepairOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">AutoHub</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    
                    <button><span><DashboardCustomizeOutlinedIcon className="icon"/>Dashboard</span></button>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <button><span><CarRepairOutlinedIcon className="icon"/>Suppliers</span></button>
                </li>
                <li>
                    <button><span><HomeRepairServiceOutlinedIcon className="icon"/>Mechanics</span></button>
                </li>
                <li>
                    <button><span><StorefrontOutlinedIcon className="icon"/>Products</span></button>
                </li>
                <li>
                    <button><span><AddCardOutlinedIcon className="icon"/>Orders</span></button>
                </li>
                <li>
                    <button><span><LocalShippingOutlinedIcon className="icon"/>Delivery</span></button>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <button><span><AnalyticsOutlinedIcon className="icon"/>Stats</span></button>
                </li>

                <p className="title">USER</p>
                <li>
                    <button><span><AccountBoxOutlinedIcon className="icon"/>Profile</span></button>
                </li>
                <li>
                    <button><span><SettingsSuggestOutlinedIcon className="icon"/>Settings</span></button>
                </li>
                <li>
                    <button><span><ExitToAppOutlinedIcon className="icon"/>Logout</span></button>
                </li>
            </ul>
        </div>
        <hr />
        <div className="bottom">
            <DayNightToggle />
        </div>
    </div>
  )
}

export default Sidebar