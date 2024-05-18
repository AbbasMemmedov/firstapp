import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const getUserRegister = async (user) => {
    try {
      const { data } = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        user
      );
      const token = data.access_token;
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container" action="">
      <input
        type="password"
        placeholder="Password..."
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email..."
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button onClick={() => getUserRegister(user)}>Login</button>
    </form>
  );
};

export default Login;
