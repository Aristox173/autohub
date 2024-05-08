import { useContext, useState } from "react";
import "../styles/login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire("Please enter both email and password!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire("Invalid email or password. Please try again.");

        setError(true);
      });
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginHeader">
          <h1>Login</h1>
        </div>
        <div className="loginForm">
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="loginInput"
            />
            <button type="submit" className="loginBtn">
              Login
            </button>
          </form>
          <button className="signButton">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
