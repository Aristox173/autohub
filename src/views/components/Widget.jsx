import "../../styles/widget.scss"
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import CarRepairOutlinedIcon from '@mui/icons-material/CarRepairOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';

const Widget = ({ type }) => {
  let data;

  switch(type){
    case "supplier":
        data = {
            title: "SUPPLIERS",
            counter: 100,
            link: "View all Suppliers",
            icon: <CarRepairOutlinedIcon className="icon" style={{color:"crimson", backgroundColor: "rgba(255, 0, 0, 0.2)"}}/>
        };
        break;
    case "mechanic":
        data = {
            title: "MECHANICS",
            counter: 200,
            link: "View all Mechanics",
            icon: <HomeRepairServiceOutlinedIcon className="icon" style={{color:"blue", backgroundColor: "rgba(12, 155, 211, 0.2)"}}/>
        };
        break;
    case "product":
        data = {
            title: "Products",
            counter: 500,
            link: "View all Products",
            icon: <StorefrontOutlinedIcon className="icon" style={{color:"green", backgroundColor: "rgba(29, 161, 9, 0.2)"}}/>
        };
        break
    case "order":
        data = {
            title: "Orders",
            counter: 300,
            link: "View all Orders",
            icon: <AddCardOutlinedIcon className="icon"style={{color:"goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)"}}/>
        };
        break;
        default:
            break;
  }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.counter}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowUpwardOutlinedIcon />
                20%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget