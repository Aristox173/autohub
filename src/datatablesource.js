export const supplierColumns = [
  { field: "id", headerName: "ID", width: 80 },
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
    width: 180,
  },
  {
    field: "supplierEmail",
    headerName: "Email",
    width: 180,
  },
  {
    field: "supplierPhone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "supplierAddress",
    headerName: "Address",
    width: 180,
  },
];

export const mechanicColumns = [
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "mechanicName",
    headerName: "Name",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.mechanicName}
        </div>
      );
    },
  },
  {
    field: "mechanicDescription",
    headerName: "Description",
    width: 150,
  },
  {
    field: "mechanicWebPage",
    headerName: "Web Page",
    width: 180,
  },
  {
    field: "mechanicEmail",
    headerName: "Email",
    width: 180,
  },
  {
    field: "mechanicPhone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "mechanicAddress",
    headerName: "Address",
    width: 180,
  },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "productName",
    headerName: "Product Name",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.productName}
        </div>
      );
    },
  },
  {
    field: "productDescription",
    headerName: "Description",
    width: 150,
  },
  {
    field: "productCategory",
    headerName: "Category",
    width: 180,
  },
  {
    field: "productPrice",
    headerName: "Price",
    width: 180,
  },
  {
    field: "productStock",
    headerName: "Stock",
    width: 100,
  },
];
