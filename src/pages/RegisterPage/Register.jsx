import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const getUserRegister = async (user) => {
    try {
      await axios.post("https://api.escuelajs.co/api/v1/users", user);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container" action="">
      <input
        type="text"
        placeholder="Name..."
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email..."
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password.."
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image"
        value={user.avatar}
        onChange={(e) => setUser({ ...user, avatar: e.target.value })}
      />
      <button onClick={() => getUserRegister(user)}>Submit</button>
    </form>
  );
};

export default Register;
