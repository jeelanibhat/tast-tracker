import React, { Component } from "react";
import Slider from "react-slick";
import { useContext } from "react";
import { TaskContext } from "./ContextApi/TaskContext";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [tasks1, setTasks1] = useContext(TaskContext);
  let state = {
    randomImageUrl: "https://picsum.photos/200",
  };
  return (
    <div className="jb-about">
      <h2 className="text-center">Hello Jeelani!!</h2>
      <div className="my-5">
        <h2> Slick Slider </h2>
        <Slider {...settings}>
          <div className="col about-boxes">
            <img src={state.randomImageUrl} alt="jb" />
            <div className="about-boxes-content">
              <h2>Angular</h2>
              <p>Welcome to angular</p>
            </div>
          </div>
          <div className="col about-boxes">
            <img src={state.randomImageUrl} alt="jb" />
            <div className="about-boxes-content">
              <h2>React</h2>
              <p>Welcome to React</p>
            </div>
          </div>
          <div className="col about-boxes">
            <img src={state.randomImageUrl} alt="jb" />
            <div className="about-boxes-content">
              <h2>Vue</h2>
              <p>Welcome to Vue</p>
            </div>
          </div>
          <div className="col about-boxes">
            <img src={state.randomImageUrl} alt="jb" />
            <div className="about-boxes-content">
              <h2>Angular</h2>
              <p>Welcome to angular</p>
            </div>
          </div>
          <div className="col about-boxes">
            <img src={state.randomImageUrl} alt="jb" />
            <div className="about-boxes-content">
              <h2>React</h2>
              <p>Welcome to React</p>
            </div>
          </div>
          <div className="col about-boxes">
            <img src={state.randomImageUrl} alt="jb" />
            <div className="about-boxes-content">
              <h2>Vue</h2>
              <p>Welcome to Vue</p>
            </div>
          </div>
        </Slider>
      </div>
      <hr></hr>
      <div className="my-5 py-5">
        <h2 className="text-center">
          Data sharing between components : using Context Api
        </h2>
        <table className="table table-responsive table-striped">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Author</th>
              <th>Day</th>
            </tr>
          </thead>
          <tbody>
            {tasks1.map((task, index) => (
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

export default About;
