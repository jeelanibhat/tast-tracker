import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Student = () => {
  useEffect(() => {
    getStudentData();
  }, []);

  const [student, setStudent] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [SearchResultState, setSearchResultState] = useState([]);

  // fetch student
  const getStudentData = async () => {
    const getStudent = await fetch("http://localhost:5000/student");
    const responseStudent = await getStudent.json();
    console.log("Student data:", responseStudent);
    setStudent(responseStudent.reverse());
  };

  // delete student
  const deleteStudent = async (id) => {
    const resDelete = await fetch(`http://localhost:5000/student/${id}`, {
      method: "DELETE",
    });
    console.log("del:", resDelete);
    setStudent(student.filter((item) => item.id != id));
    alert("Data deleted successfully!");
  };

  // search data
  const searchHandler = (e) => {
    const getInput = e.target.value;
    console.log("input:", getInput);
    setInputSearch(getInput);
    if (inputSearch !== " ") {
      const searchResult = student.filter((result) => {
        return Object.values(result)
          .join("")
          .toLowerCase()
          .includes(inputSearch.toLowerCase());
      });
      setSearchResultState(searchResult);
      console.log("Data::", student);
    } else {
      console.log("else");
      setSearchResultState(student);
    }
  };

  return (
    <div className="container my-5">
      <div className="heading d-flex justify-content-between align-items-center mb-3">
        <h2>Student Data</h2>
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="p-1 mr-2"
            placeholder="Search..."
            onChange={searchHandler}
          />
          <Link to="addStudent">
            <button className="btn btn-sm btn-success">Add Student</button>
          </Link>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Student Name</th>
            <th>Student Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {SearchResultState.length < 1
            ? student.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.course}</td>
                  <td>
                    <Link to={`updateStudent/${item.id}`}>
                      <button className="btn btn-sm btn-warning mr-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteStudent(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : SearchResultState.map((item1, index) => (
                <tr key={item1.id}>
                  <td>{index + 1}</td>
                  <td>{item1.name}</td>
                  <td>{item1.course}</td>
                  <td>
                    <Link to={`updateStudent/${item1.id}`}>
                      <button className="btn btn-sm btn-warning mr-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteStudent(item1.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
