import React, { useEffect, useState } from "react";

const ItemDetails = (match) => {
  useEffect(() => {
    fetchDetails();
    console.log("match :::: ", match.location.pathname);
  }, []);

  const APP_ID = "93538ba2";
  const APP_KEY = "e12996178e68bf47ec0f2dc88d49db93";

  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("banana");

  const fetchDetails = async () => {
    const fetchItem = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}?match.location.pathname`
    );
    console.log("-------abc---------- :: ", fetchItem);
    const item = fetchItem.json();
    console.log("-------item---------- :: ", item);
  };

  return (
    <div className="container-fluid recipe-app">
      <div className="recipe-head">
        <img src="images/logo.png" />
        <h2 className="text-center">Recipe App</h2>
      </div>
      <hr />

      {/* Recipe output */}
      <div className="recipe-result">
        <div className="border p-0 row">Item details</div>
      </div>
    </div>
  );
};

export default ItemDetails;
