import React from "react";
import { useState, useEffect } from "react";
import ListImages from "./ListImages";

const SearchImages = () => {
  const apiUrl = "https://pixabay.com/api";
  const apiKey = "23013239-81e3028cc014af3030aeace3a";

  const [search, SetSearch] = useState("");
  const [result, SetResult] = useState("");
  console.log("result =====", result);

  // result.map((item) => {
  //   console.log(item.user);
  // });

  useEffect(() => {
    fetchPixelbay();
  }, []);

  const fetchPixelbay = async () => {
    const getApi = await fetch(
      `https://pixabay.com/api/?key=23013239-81e3028cc014af3030aeace3a&q=${result}&image_type=photo&`
    );
    const getApiJson = await getApi.json();
    console.log("pixelbay data ::", getApiJson.hits);
    SetResult(getApiJson.hits);
  };

  // input box
  const onTextChange = (e) => {
    const inputValue = e.target.value;
    SetSearch(inputValue);
  };

  // search results
  const searchPixelbay = (e) => {
    const inputBox = e.target.value;
    SetResult(inputBox);
  };

  return (
    <div className="pixelbay-main container">
      <input
        type="text"
        className="form-control w-25"
        value={search}
        placeholder="Search Images .."
        onChange={onTextChange}
        onKeyPress={searchPixelbay}
      />
      <div className="row">
        {/* {result.map((item) => (
          <div className="col-md-3">
            <img src={item.largeImageURL} className="w-100 h-50" alt="" />
            <p>User : {item.user}</p>
            <p>Downloads : {item.downloads}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SearchImages;
