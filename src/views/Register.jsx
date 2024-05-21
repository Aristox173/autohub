import "../styles/register.scss";
import { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Register = () => {
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");

  return (
    <div className="registerContainer">
      <div className="register register-supplier">
        <div className="register-top">
          <h1>Create Supplier Account</h1>
        </div>
        <div className="register-bottom">
          <div className="register-left">
            <img
              src={
                file1
                  ? URL.createObjectURL(file1)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="register-right">
            <form onSubmit="">
              <div className="register-formInput">
                <label htmlFor="file1">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file1"
                  onChange={(e) => setFile1(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="register-formInput">
                <label>Name</label>
                <input
                  id="supplierName"
                  type=""
                  placeholder="Auto Zone"
                  onChange=""
                />
              </div>
              <div className="register-formInput">
                <label>Description</label>
                <input
                  id="supplierDescription"
                  type="text"
                  placeholder="Supplier of Engine Parts"
                  onChange=""
                />
              </div>
              <div className="register-formInput">
                <label>Web Page</label>
                <input
                  id="supplierWebPage"
                  type="text"
                  placeholder="www.autozone.com"
                  onChange=""
                />
              </div>
              <div className="register-formInput">
                <label>Email</label>
                <input
                  id="supplierEmail"
                  type="email"
                  placeholder="autozone@email.com"
                  onChange=""
                />
              </div>
              <div className="register-formInput">
                <label>Password</label>
                <input
                  id="supplierPassword"
                  type="password"
                  placeholder="**********"
                  onChange=""
                />
              </div>
              <div className="register-formInput">
                <label>Phone</label>
                <input
                  id="supplierPhone"
                  type="text"
                  placeholder="+593 12-345-6789"
                  onChange=""
                />
              </div>
              <div className="register-formInput">
                <label>Address</label>
                <input
                  id="supplierAddress"
                  type="text"
                  placeholder="Av. Simón Bolivar"
                  onChange=""
                />
              </div>
            </form>
          </div>
        </div>
        <div className="register-button">
          <button>Register Provider</button>
        </div>
      </div>

      <div className="register register-mechanic">
        <div className="register-top">
          <h1>Create Mechanic Account</h1>
        </div>
        <div className="register-bottom">
          <div className="register-left">
            <img
              src={
                file2
                  ? URL.createObjectURL(file2)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="register-right">
            <form onSubmit="">
              <div className="register-formInput">
                <label htmlFor="file2">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file2"
                  onChange={(e) => setFile2(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="register-formInput">
                <label>Name</label>
                <input
                  id="mechanicName"
                  type=""
                  placeholder="Mecánica San Pedro"
                  onChange=""
                />
              </div>
              <div className="register-formInput">
                <label>Description</label>
                <input
                  id="mechanicDescription"
                  type="text"
                  placeholder="Local Mechanic"
                  onChange=""
                />
              </div>
              <div className="register-formInput">
                <label>Web Page</label>
                <input
                  id="mechanicWebPage"
                  type="text"
                  placeholder="www.mecanicasp.com"
                  onChange=""
                />
              </div>
              <div className="register-formInput">
                <label>Email</label>
                <input
                  id="mechanicEmail"
                  type="email"
                  placeholder="mecanicasp@email.com"
                  onChange=""
                />
              </div>
              <div className="register-formInput">
                <label>Password</label>
                <input
                  id="mechanicPassword"
                  type="password"
                  placeholder="**********"
                  onChange=""
                />
              </div>
              <div className="register-formInput">
                <label>Phone</label>
                <input
                  id="mechanicPhone"
                  type="text"
                  placeholder="+593 12-345-6789"
                  onChange=""
                />
              </div>
              <div className="register-formInput">
                <label>Address</label>
                <input
                  id="mechanicAddress"
                  type="text"
                  placeholder="San Pedro"
                  onChange=""
                />
              </div>
            </form>
          </div>
        </div>
        <div className="register-button">
          <button>Register Mechanic</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
