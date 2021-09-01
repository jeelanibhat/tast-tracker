import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const [student, setStudent] = useState([]);
  // Deconstruct Array ( student )
  const { name, course } = student;
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    loadStudent(id);
  }, []);

  // load individual student
  const loadStudent = async (id) => {
    const getRow = await fetch(`http://localhost:5000/student/${id}`);
    const dataRow = await getRow.json();
    console.log("data from student route:", dataRow);
    setStudent(dataRow);
  };

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: [e.target.value] });
  };

  // update student
  const updateStudentFunction = async (e) => {
    e.preventDefault();
    const resUpdate = await fetch(`http://localhost:5000/student/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, course }),
    });
    const dataUpdate = await resUpdate.json();
    console.log("data update::", dataUpdate);
    setStudent({ ...student, dataUpdate });
    alert("Data updated successfully!");
    history.push("/Student");
  };

  return (
    <div className="container">
      <div className="w-50 m-auto pt-5 d-flex justify-content-between align-items-center">
        <h2>Update Student</h2>
        <Link to="/Student">
          <button className="btn btn-sm btn-success">View Student</button>
        </Link>
      </div>
      <hr className="w-50 m-auto py-4" />
      <form className="w-50 m-auto" onSubmit={updateStudentFunction}>
        <div className="task-name">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Add Name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="task-name">
          <label>Course</label>
          <input
            type="text"
            className="form-control"
            placeholder="Add Course"
            name="course"
            value={course}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="task-name">
          <input
            type="submit"
            className="btn btn-dark w-100"
            value="Update Student"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateStudent;
