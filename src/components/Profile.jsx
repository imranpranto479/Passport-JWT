import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // If token is not present, navigate to login page
      return; // Stop further execution
    }

    axios
      .get("http://localhost:4000/profile", {
        headers: {
          Authorization: `Bearer ${token}`, // Include 'Bearer' prefix before token
        },
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div>
      <h2>Profile Page</h2>
    </div>
  );
};

export default Profile;
