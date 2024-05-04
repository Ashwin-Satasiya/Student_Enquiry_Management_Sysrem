import React, { useEffect } from "react";
import axios from "axios";
import { IoPersonAdd } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { studentActions } from "../store";
import { Link, useNavigate } from "react-router-dom";

const ReadEnquiry = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5001/students")
      .then((response) => dispatch(studentActions.addStudent(response.data)))
      .catch((error) => console.log("Error Get", error));
  }, []);

  const studentInfo = useSelector((state) => state.student);

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="text-end mb-3 w-100">
          <h3 className="text-center mt-3">Student Information</h3>
          <Link to={"/create-enquiry"} className="btn btn-primary">
            Add data
          </Link>
        </div>

        <div className="col-md-9 mx-auto mt-3">
          <table className="table table-success">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Contact Number</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            {studentInfo.length > 0 ? (
              studentInfo.map((data, index) => (
                <tbody key={data.id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.gender}</td>
                    <td>{data.contact_number}</td>
                    <td>
                      <div className="d-flex gap-3">
                        <button
                          onClick={() => navigate("/create-enquiry")}
                          className="btn btn-info"
                        >
                          <span>
                            <IoPersonAdd /> Add
                          </span>
                        </button>
                        <Link to={`/edit-enquiry/${data.id}`}>
                          <button className="btn btn-success">
                            <span>
                              <CiEdit /> Edit
                            </span>
                          </button>
                        </Link>
                        <Link to={`/delete-enquiry/${data.id}`}>
                          <button className="btn btn-danger">
                            {" "}
                            <span>
                              <MdDeleteForever /> Delete
                            </span>{" "}
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody>
                <tr>
                  <td colSpan={7} className="text-center">
                    <strong>No data found</strong>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReadEnquiry;
