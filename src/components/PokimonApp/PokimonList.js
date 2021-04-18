import React, { useEffect, useState } from "react";

const PokimonList = () => {
  const [poki, setPoki] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  useEffect(() => {
    setLoading(true);
    fetchPokimon();
  }, [currentPage]);

  const fetchPokimon = async () => {
    const responsePoki = await fetch(currentPage);
    const PokiJson = await responsePoki.json();
    console.log("Poki json :: ", PokiJson);
    setLoading(false);
    setPoki(PokiJson.results);
  };

  if (loading) return "Loading.....";

  return (
    <div className="container-fluid pokimon-main">
      <h2 className="text-center pt-4 pb-2 text-warning">
        Pokimon Data from Api:
      </h2>
      <hr></hr>
      <div className="px-5 pokimon-wrap">
        <p>API : https://pokeapi.co/api/v2/pokemon</p>
        {/* check this : how can i also get count value from API */}
        <p>Count( {poki.count} )</p>
        <b>Results:</b>
        {poki.map((response) => (
          <div className="row m-0">
            <p className="mr-3 w-25" key={response.name}>
              Name : {response.name}
            </p>
            <p>URL: {response.url}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokimonList;
