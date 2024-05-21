import "../styles/new.scss";
import Sidebar from "../views/components/Sidebar";
import Navbar from "../views/components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  serverTimestamp,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../controllers/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const New = ({ inputs, title, dbModel }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPer] = useState(null);
  const [supplierNames, setSupplierNames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSupplierNames = async () => {
      if (dbModel === "products") {
        const supplierCollectionRef = collection(db, "suppliers");
        const supplierSnapshot = await getDocs(supplierCollectionRef);
        const names = supplierSnapshot.docs.map(
          (doc) => doc.data().supplierName
        );
        setSupplierNames(names);
      }
    };

    fetchSupplierNames();
  }, [dbModel]);

  useEffect(() => {
    const uploadFile = () => {
      //const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      let userCredential;

      // Determine which collection to use based on dbModel
      if (dbModel === "suppliers") {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          data.supplierEmail,
          data.supplierPassword
        );
      } else if (dbModel === "mechanics") {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          data.mechanicEmail,
          data.mechanicPassword
        );
      }

      // Add data to Firestore based on dbModel
      if (dbModel === "suppliers" || dbModel === "mechanics") {
        await setDoc(doc(db, dbModel, userCredential.user.uid), {
          ...data,
          timeStamp: serverTimestamp(),
        });
      } else if (dbModel === "products") {
        const productsCollectionRef = collection(db, "products");
        await addDoc(productsCollectionRef, {
          ...data,
          timeStamp: serverTimestamp(),
        });
      }

      // Show success message using SweetAlert
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });

      // Navigate back
      navigate(-1);
    } catch (err) {
      console.log(err);
      // Handle any errors here if needed
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button disabled={per !== null && per < 100} type="submit">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
