import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteEnquiry = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .delete(`http://localhost:5001/students/${id}`)
      .then((response) => {
        response.json;
        navigate("/");
      })
      .catch((error) => console.log("Delete Error", error));
  }, []);

  return <div>DeleteEnquiry</div>;
};

export default DeleteEnquiry;
