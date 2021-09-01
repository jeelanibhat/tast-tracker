import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState([]);

  const history = useHistory();

  // add student
  const submitStudent = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, course }),
    });
    const dataStudent = await response.json();
    setStudent([...student, dataStudent]);
    alert("Student added successfully!");
    history.push("/Student");
  };

  return (
    <div className="container">
      <div className="w-50 m-auto pt-5 d-flex justify-content-between align-items-center">
        <h2>Add Student</h2>
        <Link to="Student">
          <button className="btn btn-sm btn-success">View Student</button>
        </Link>
      </div>
      <hr className="w-50 m-auto py-4" />
      <form className="w-50 m-auto" onSubmit={submitStudent}>
        <div className="task-name">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Add Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="task-name">
          <label>Course</label>
          <input
            type="text"
            className="form-control"
            placeholder="Add Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <div className="task-name">
          <input
            type="submit"
            className="btn btn-dark w-100"
            value="Add Student"
          />
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
