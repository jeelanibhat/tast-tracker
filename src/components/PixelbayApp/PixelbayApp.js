import React from "react";
import ListImages from "./ListImages";
import SearchImages from "./SearchImages";

const PixelbayApp = () => {
  return (
    <div className="pixelbay-main">
      <h2 className="text-center">
        Pixel Bay Search Engine <hr></hr>
      </h2>
      <SearchImages />
      <ListImages />
    </div>
  );
};

export default PixelbayApp;
