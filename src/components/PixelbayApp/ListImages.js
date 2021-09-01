import React from "react";
import SearchImages from "./SearchImages";

const ListImages = (props) => {
  // console.log("list images ----::", props.value);
  return (
    <div className="container my-5">
      <h2>
        Pixel Bay Images<hr className="w-25 ml-0"></hr>
      </h2>
      <div className="row">
        {/* {props.value.map((item) => {
          <div className="col-md-3">
            <img src={item.largeImageURL} alt="" />
            <h3>User : {item.user}</h3>
            <p>Downloads : {item.downloads}</p>
          </div>;
        })} */}
      </div>
    </div>
  );
};

export default ListImages;
