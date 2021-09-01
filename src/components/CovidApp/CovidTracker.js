import { data } from "jquery";
import React, { useState, useEffect } from "react";

const CovidTracker = () => {
  useEffect(() => {
    fetchcovidCardData();
    fetchcovidWorldData();
  }, []);

  const [covidCardData, setCovidCardData] = useState([]);
  const [CovidCountryData, setCovidCountryData] = useState([]);
  const [searchTable, setSearchTable] = useState("");

  const commaNumber = require("comma-number");

  let TotalConfirmed = covidCardData.TotalConfirmed;
  TotalConfirmed = commaNumber(TotalConfirmed);
  let TotalRecovered = covidCardData.TotalRecovered;
  TotalRecovered = commaNumber(TotalRecovered);
  let TotalDeaths = covidCardData.TotalDeaths;
  TotalDeaths = commaNumber(TotalDeaths);
  let NewRecovered = covidCardData.NewRecovered;
  NewRecovered = commaNumber(NewRecovered);

  // ##################### fetch covid Api #############################
  const fetchcovidCardData = async () => {
    try {
      const responseCovid = await fetch("https://api.covid19api.com/summary");
      const data = await responseCovid.json();
      console.log("Covid Data summary2::", data.Countries);
      setCovidCardData(data.Global);
    } catch (err) {
      console.log("Error :", err);
    }
  };
  // ##################### fetch covid Api world table #############################
  const fetchcovidWorldData = async () => {
    try {
      const responseCovidWorld = await fetch(
        "https://api.covid19api.com/summary"
      );
      const dataWorld = await responseCovidWorld.json();
      console.log("Covid Data World::", dataWorld.Countries);
      setCovidCountryData(dataWorld.Countries);
    } catch (err) {
      console.log("Error :", err);
    }
  };

  //   Date format
  const getDate = covidCardData.Date;
  const todayDate = new Date(getDate).toLocaleString();

  // ########################   SEARCH DATA IN TABLE
  const inputTable = (e) => {
    setSearchTable(e.target.value);
  };

  const searchTableData = (e) => {
    if (e.key === "Enter") {
      let inputCountry = e.target.value;
      console.log("search");
      // const searchedData = CovidCountryData.map((search) => {
      //   if (inputCountry == search.Country) {
      //     console.log("success");
      //     setSearchTable(inputCountry);
      //     return;
      //   }
      // });
    }
  };

  return (
    <div className="covid-container">
      <h4 className="text-uppercase text-center">Covid Tracker</h4>
      <hr />
      {/* cards */}
      <div className="grey-bg container">
        <section id="minimal-statistics">
          <div className="row mt-5">
            <div className="col-12 mt-3 mb-1">
              <h4 className="text-uppercase">World Stats</h4>
              <p>{todayDate}</p>
            </div>
          </div>

          {/* show data in cards */}
          <div className="row mb-5">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex">
                      <div className="align-self-center">
                        <i className="icon-pencil primary font-large-2 float-left"></i>
                      </div>
                      <div className="media-body text-right">
                        <h3>{TotalConfirmed}</h3>
                        <span>Total Confirmed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex">
                      <div className="align-self-center">
                        <i className="icon-speech warning font-large-2 float-left"></i>
                      </div>
                      <div className="media-body text-right">
                        <h3>{TotalRecovered}</h3>
                        <span>Total Recovered</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex">
                      <div className="align-self-center">
                        <i className="icon-graph success font-large-2 float-left"></i>
                      </div>
                      <div className="media-body text-right">
                        <h3>{TotalDeaths}</h3>
                        <span>Total Deaths</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex">
                      <div className="align-self-center">
                        <i className="icon-rocket danger font-large-2 float-right"></i>
                      </div>
                      <div className="media-body text-right">
                        <h3>{NewRecovered}</h3>
                        <span>New Recovered</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* show data in table */}

          <div className="row my-5">
            <div className="col-12 mt-3 mb-1 d-flex justify-content-between">
              <div>
                <h4 className="text-uppercase">World's Stats</h4>
                <p>{todayDate}</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={inputTable}
                  onKeyPress={searchTableData}
                  value={searchTable}
                />
              </div>
            </div>
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>Sno</th>
                  <th>Country</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {CovidCountryData.map((data, index) => (
                  <tr key={data.id}>
                    <td>{index + 1}</td>
                    <td>{data.Country}</td>
                    <td>{data.TotalConfirmed}</td>
                    <td>{data.TotalRecovered}</td>
                    <td>{data.TotalDeaths}</td>
                    <td>{data.Date.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CovidTracker;
