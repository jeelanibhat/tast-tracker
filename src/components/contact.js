import React, { Component, useContext } from "react";
import { TaskContext } from "../components/ContextApi/TaskContext";

const Contact = () => {
  const state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const changeFormHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  const [tasks, setTasks] = useContext(TaskContext);

  return (
    <div>
      <h2 className="text-center my-0 pt-3 bg-warning">Find Me!!</h2>
      <p className="text-center p-3 my-0 bg-warning">
        We handcraft unique design & digital experiences to surprise the
        universe.
      </p>
      <div className="container contact-form my-5">
        <form id="contact-form" name="myForm" className="form">
          <div className="form-group">
            <label className="form-label" id="nameLabel" for="name"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Your name"
              tabindex="1"
              // value={this.state.name}
              onChange={(e) => this.changeFormHandler}
            />
          </div>

          {/* <div className="form-group">
            <label className="form-label" id="emailLabel" for="email"></label>
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              tabindex="2"
            />
          </div>

          <div className="form-group">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              tabindex="3"
            />
          </div>

          <div className="form-group">
            <label className="form-label" for="message"></label>
            <textarea
              rows="6"
              cols="60"
              className="form-control"
              placeholder="Your message"
              tabindex="4"
            ></textarea>
          </div> */}

          <div className="text-center margin-top-25">
            <button type="submit" className="btn btn-mod btn-border btn-large">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="container my-5">
        <h2 className="text-left">
          Data sharing between components : using Context Api
        </h2>
        <p className="mb-4">
          Data is getting shared from <b>Task Tracker App</b> in{" "}
          <b>Apps section</b>. And you can see the update in About page and
          Contact page.
        </p>
        <table className="table table-responsive table-striped">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Author</th>
              <th>Day</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{task.text}</td>
                <td>{task.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
