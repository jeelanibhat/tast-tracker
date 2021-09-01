import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const APP_ID = "93538ba2";
  const APP_KEY = "e12996178e68bf47ec0f2dc88d49db93";

  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("banana");

  // it will run once only
  useEffect(() => {
    getRecipe();
  }, [query]);

  // Get Recipe from API
  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log("data.hits ::", data.hits);
    setRecipe(data.hits);
  };

  // search Recipe
  const searchRecipe = (e) => {
    if (e.key === "Enter") {
      const searchData = e.target.value;
      if (searchData.length < 1) {
        document.getElementById("errorMsg").classList.remove("d-none");
      } else {
        setQuery(searchData);
        document.getElementById("errorMsg").classList.add("d-none");
      }
    }
  };

  return (
    <div className="container-fluid recipe-app">
      <div className="recipe-head">
        <img src="images/logo.png" />
        <h2 className="text-center">Recipe App</h2>
      </div>
      <div className="input-search mx-auto mb-3">
        <input
          type="text"
          placeholder="Search Recipe..."
          onKeyPress={searchRecipe}
        />
        <p className="text-danger mt-2 d-none" id="errorMsg">
          Please enter your search term!
        </p>
      </div>

      {/* Recipe output */}
      <div className="recipe-result">
        <div className="border p-0 row">
          {recipe.map((recipe) => (
            <p key={recipe.recipe.label} className="recipe-title">
              <a href={recipe.recipe.url} target="_blank">
                <img src={recipe.recipe.image} className="img-fluid" />
                <p className="text-dark p-2">{recipe.recipe.label}</p>
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
