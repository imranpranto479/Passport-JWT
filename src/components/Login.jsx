import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, SetPassword] = useState("");

  // const handleLogin = () => {
  //   axios
  //     .post("http://localhost:4000/login", { username, password })
  //     .then((user) => {
  //       localStorage.setItem("token", user.data.token);
  //       console.log("user is Logined");
  //       navigate("/profile");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       navigate("/register");
  //     });
  // };
  const handleLogin = () => {
    axios
      .post("http://localhost:4000/login", { username, password })
      .then((user) => {
        console.log("Login successful. Received token:", user.data.token);
        localStorage.setItem("token", user.data.token);
        console.log("Token stored in localStorage.");
        navigate("/profile");
      })
      .catch((err) => {
        console.log("Login failed:", err);
        navigate("/register");
      });
  };
  
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        required
      />

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          SetPassword(e.target.value);
        }}
        required
      />

      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
