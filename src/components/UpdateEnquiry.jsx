import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact_number: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/students/${id}`)
      .then((response) => setFormData(response.data))
      .catch((error) => console.log("GET UPDATE Error", error));
  }, [id]);

  let nameElement = useRef(null);
  let ageElement = useRef(null);
  let genderElement = useRef(null);
  let contact_numberElement = useRef(null);

  const onUpdateHandle = (event) => {
    event.preventDefault();
    let name = nameElement.current.value;
    let age = ageElement.current.value;
    let gender = genderElement.current.value;
    let contact_number = contact_numberElement.current.value;
    setFormData({
      name,
      age,
      gender,
      contact_number,
    });
    navigate("/");
  };

  useEffect(() => {
    axios
      .put(`http://localhost:5001/students/${id}`, formData)
      .then((response) => {
        response.data;
      })
      .catch((error) => console.log("Put Error", error));
  }, [formData]);

  return (
    <div className="container-fluid">
      <h3 className="text-center mt-3">Update Student Enquiry</h3>
      <div className="row mt-3">
        <div className="col-md-5 mx-auto p-5 border">
          <form onSubmit={onUpdateHandle}>
            <div className="mb-3">
              <label className="form-label">
                <strong>Student Name</strong>{" "}
              </label>
              <input
                className="form-control"
                type="text"
                value={formData.name}
                ref={nameElement}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
                placeholder="Enter Name here"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Age</strong>{" "}
              </label>
              <input
                className="form-control"
                type="text"
                value={formData.age || ""}
                ref={ageElement}
                onChange={(event) =>
                  setFormData({ ...formData, age: event.target.value })
                }
                placeholder="Enter age here"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <strong>Gender</strong>
              </label>
              <select
                className="form-control w-25"
                type="text"
                value={formData.gender}
                ref={genderElement}
                onChange={(event) =>
                  setFormData({ ...formData, gender: event.target.value })
                }
                placeholder="Enter age here"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">
                <strong>Contact No.</strong>
              </label>
              <input
                className="form-control"
                type="text"
                value={formData.contact_number}
                ref={contact_numberElement}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    contact_number: event.target.value,
                  })
                }
                placeholder="Enter contact number here"
              />
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-info w-25">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEnquiry;
