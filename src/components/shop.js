import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const APP_ID = "93538ba2";
  const APP_KEY = "e12996178e68bf47ec0f2dc88d49db93";

  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("apple");

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
    console.log(data.hits);
    setRecipe(data.hits);
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
        <div className="border p-0 row">
          {recipe.map((recipe) => (
            <p key={recipe.recipe.label} className="recipe-title">
              <Link to={`/shop/${recipe.recipe.label}`}>
                {" "}
                <img src={recipe.recipe.image} />
                <p>{recipe.recipe.label}</p>
              </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
