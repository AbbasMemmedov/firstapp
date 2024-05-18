import React, { useState } from "react";
import "./modal.css";
import axios from "axios";
const Modal = ({ setModal, user }) => {
  const [update, setUpdate] = useState({
    name: user.name,
    email: user.email,
  });
  const changeData = async (id, user) => {
    try {
      const response = await axios.put(
        `https://api.escuelajs.co/api/v1/users/${id}`,
        user
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
  return (
    <div className=" round">
      <div className="modal-container">
        <button onClick={() => setModal(false)}>X</button>
        <input
          type="text"
          placeholder="Name"
          value={update.name}
          onChange={(e) => setUpdate({ ...update, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={update.email}
          onChange={(e) => setUpdate({ ...update, email: e.target.value })}
        />
        <button
          className="btn btn-success"
          onClick={() => changeData(user.id, update)}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default Modal;
