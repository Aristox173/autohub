import "../../styles/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../controllers/firebase/firebase";
import Swal from "sweetalert2";

const Datatable = ({ columns, title }) => {
  const [data, setData] = useState([]);
  const dbModel = title.toLowerCase();
  console.log(dbModel);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, dbModel));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });

  //console.log(data);

  const handleDelete = async (id) => {
    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    });

    // If user confirms deletion
    if (result.isConfirmed) {
      try {
        // Attempt to delete the document
        await deleteDoc(doc(db, dbModel, id));

        // Filter out the deleted item from the data
        setData(data.filter((item) => item.id !== id));

        // Show success message
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } catch (err) {
        console.log(err);
        // Show error message if deletion fails
        Swal.fire("Error", "Failed to delete the item.", "error");
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // If user cancels the deletion
      Swal.fire("Cancelled", "Your file is safe :)", "info");
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="editButton">Edit</div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        <Link to={`/${title.toLowerCase()}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        rowHeight={50}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
