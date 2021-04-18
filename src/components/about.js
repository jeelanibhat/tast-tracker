import React, { Component } from "react";
import Slider from "react-slick";

class About extends Component {
  state = {
    randomImageUrl: "https://picsum.photos/200",
  };
  render() {
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
    return (
      <div className="jb-about">
        <h2 className="text-center">Hello Jeelani!!</h2>
        <p className="text-center">
          We handcraft unique design & digital experiences to surprise the
          universe.
        </p>
        <span>
          Pogody is a Modern & Innovative Responsive Coming Soon Template by
          hencework. Loaded with outstanding effects that catches user's eye
          creating a subconscious mental interaction through color, font,
          effects, layout, icons & every pixel on the screen.
        </span>
        <div className="my-4">
          <h2> My Projects </h2>
          <Slider {...settings}>
            <div className="col about-boxes">
              <img src={this.state.randomImageUrl} alt="jb" />
              <div className="about-boxes-content">
                <h2>Angular</h2>
                <p>Welcome to angular</p>
              </div>
            </div>
            <div className="col about-boxes">
              <img src={this.state.randomImageUrl} alt="jb" />
              <div className="about-boxes-content">
                <h2>React</h2>
                <p>Welcome to React</p>
              </div>
            </div>
            <div className="col about-boxes">
              <img src={this.state.randomImageUrl} alt="jb" />
              <div className="about-boxes-content">
                <h2>Vue</h2>
                <p>Welcome to Vue</p>
              </div>
            </div>
            <div className="col about-boxes">
              <img src={this.state.randomImageUrl} alt="jb" />
              <div className="about-boxes-content">
                <h2>Angular</h2>
                <p>Welcome to angular</p>
              </div>
            </div>
            <div className="col about-boxes">
              <img src={this.state.randomImageUrl} alt="jb" />
              <div className="about-boxes-content">
                <h2>React</h2>
                <p>Welcome to React</p>
              </div>
            </div>
            <div className="col about-boxes">
              <img src={this.state.randomImageUrl} alt="jb" />
              <div className="about-boxes-content">
                <h2>Vue</h2>
                <p>Welcome to Vue</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default About;
