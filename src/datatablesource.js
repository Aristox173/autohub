export const supplierColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "supplierName",
    headerName: "Name",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.supplierName}
        </div>
      );
    },
  },
  {
    field: "supplierDescription",
    headerName: "Description",
    width: 150,
  },
  {
    field: "supplierWebPage",
    headerName: "Web Page",
    width: 150,
  },
  {
    field: "supplierEmail",
    headerName: "Email",
    width: 150,
  },
  {
    field: "supplierPhone",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "supplierAddress",
    headerName: "Address",
    width: 150,
  },
];
