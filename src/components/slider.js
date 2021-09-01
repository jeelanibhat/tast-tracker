import React, { Component } from "react";

class Slider extends Component {
  state = {
    randomImageUrl: "https://picsum.photos/200",
    imageUrl: "https://wallpaperaccess.com/full/343619.jpg",
    videoUrl: "https://www.youtube.com/embed/mOSKUd3LkjI",
  };
  render() {
    return (
      <div className="jb-slider">
        <video
          src="images/1.webm"
          autoPlay="true"
          loop
          className="w-100"
        ></video>
        {/* <img src="images/bg/14.jpg" alt="" className="w-100" /> */}
        <div className="slider-content">
          <h2>Jeelani Bhat </h2>
          <p>Lets explore together!</p>
        </div>
      </div>
    );
  }
}

export default Slider;
