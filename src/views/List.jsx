import "../styles/list.scss";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Datatable from "./components/Datatable";

const List = ({ columns, title }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable columns={columns} title={title} />
      </div>
    </div>
  );
};

export default List;
