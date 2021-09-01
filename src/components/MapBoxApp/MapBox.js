import * as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

const MapBox = () => {
  const [latitudeData, setLatitudeData] = useState("");
  const [longitudeData, setLongitudeData] = useState("");

  const [searchData, setSearchData] = useState([34.0837, 74.7973]);

  // const latitudeVar = 34.0837;
  // const longitudeVar = 74.7973;
  // const zoom = 8;

  useEffect(() => {}, []);

  const latitudeBox = (e) => {
    setLatitudeData(e.target.value);
  };
  const longitudeBox = (e) => {
    setLongitudeData(e.target.value);
  };

  const searchMap = (e) => {
    e.preventDefault();
    console.log("lati - longi:", latitudeData, longitudeData);
    setSearchData(latitudeData, longitudeData);
  };

  const [viewport, setViewport] = useState({
    width: "80vw",
    height: "80vh",
    latitude: searchData[0],
    longitude: searchData[1],
    zoom: 8,
  });

  const accessToken = "f60759e78138b8f4e1bf3279ad8171b3";
  const apiData = `http://api.positionstack.com/v1/reverse?access_key=${accessToken}&country=AU,CA`;
  console.log("apiData:", apiData);

  return (
    <div className="container my-5">
      <div className="search-box">
        <form
          onSubmit={searchMap}
          className="d-flex align-items-center justify-content-center mb-4"
        >
          <input
            type="text"
            placeholder="Enter Latitude"
            className="w-25 mr-4"
            onChange={latitudeBox}
          />
          <input
            type="text"
            placeholder="Enter Longitude"
            className="w-25 mr-4"
            onChange={longitudeBox}
          />
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiamVlbGFuaSIsImEiOiJja3BjajR0N3QxYWVpMnB0N21qanE1ZjJzIn0.qD1eAZ8YsZq_RCfsGIkpdQ"
        }
        mapStyle="mapbox://styles/jeelani/ckpfzluvm1e7j17qm2qsn74i1"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </div>
  );
};

export default MapBox;
