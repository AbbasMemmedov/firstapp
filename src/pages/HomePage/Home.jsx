import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const Home = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(user);
  return (
    <>
      <div className="container border border-dark w-25 p-4">
        <h4>{user.name}</h4>
        <button onClick={() => setModal(true)}>Edit</button>
      </div>
      {modal && <Modal setModal={setModal} user={user} />}
    </>
  );
};

export default Home;
