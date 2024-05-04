import axios from "axios";
import React, { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { studentActions } from "../store";
import { useNavigate } from "react-router-dom";

function CreateEnquiry() {
  const navigate = useNavigate();

  const studentInfo = useSelector((state) => state.student);

  const dispatch = useDispatch();

  let nameElement = useRef(null);
  let ageElement = useRef(null);
  let genderElement = useRef(null);
  let contact_numberElement = useRef(null);

  const onSubmitHandle = (event) => {
    event.preventDefault();
    let name = nameElement.current.value;
    let age = ageElement.current.value;
    let gender = genderElement.current.value;
    let contact_number = contact_numberElement.current.value;

    let studentDetails = {
      name,
      age,
      gender,
      contact_number,
    };
    dispatch(studentActions.addStudent(studentDetails));

    nameElement.current.value = "";
    ageElement.current.value = "";
    genderElement.current.value = "";
    contact_numberElement.current.value = "";
  };

  useEffect(() => {
    if (
      studentInfo.name &&
      studentInfo.age &&
      studentInfo.gender &&
      studentInfo.contact_number
    ) {
      axios
        .post("http://localhost:5001/students", studentInfo)
        .then((response) => {
          response.data;
          navigate("/");
        })
        .catch((error) => console.log("Data Post", error));
    }
  }, [studentInfo]);

  return (
    <div className="container-fluid">
      <h3 className="text-center mt-3">Student Enquiry Form</h3>
      <div className="row mt-3">
        <div className="col-md-5 mx-auto p-5 border">
          <form onSubmit={onSubmitHandle}>
            <div className="mb-3">
              <label className="form-label">
                <strong>Student Name</strong>{" "}
              </label>
              <input
                className="form-control"
                type="text"
                ref={nameElement}
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
                ref={ageElement}
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
                ref={genderElement}
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
                ref={contact_numberElement}
                placeholder="Enter contact number here"
              />
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-info w-25">
                Sumbit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEnquiry;
