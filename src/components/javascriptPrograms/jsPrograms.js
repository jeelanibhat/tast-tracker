import { useState } from "react";
import $ from "jquery";
import { getLCP } from "web-vitals";

const JsPrograms = () => {
  const teams = [
    { name: "Arsenal", captain: "Jack", won: 10, loss: 5, draw: 5 },
    { name: "Liverpool", captain: "Anderson", won: 15, loss: 2, draw: 3 },
    { name: "Chelsea", captain: "Terry", won: 10, loss: 5, draw: 5 },
    { name: "Man City", captain: "Company", won: 13, loss: 3, draw: 4 },
    { name: "Man Utd", captain: "Roney", won: 11, loss: 5, draw: 4 },
    { name: "New Castle", captain: "Shelvy", won: 8, loss: 10, draw: 2 },
    { name: "Leister", captain: "Vardy", won: 8, loss: 8, draw: 4 },
    { name: "Aston villa", captain: "jack wil", won: 6, loss: 10, draw: 4 },
  ];

  const goals = [3, 5, 12, 34, 12, 53, 34, 23, 54, 76];
  const hobbies = [
    { name: "football", likedby: "jeelani" },
    { name: "cricket", likedby: "aqib" },
    { name: "chess", likedby: "junaid" },
    { name: "reading", likedby: "aqib" },
    { name: "travelling", likedby: "junaid" },
    { name: "internet", likedby: "junaid" },
    { name: "instagram", likedby: "aqib" },
    { name: "running", likedby: "jeelani" },
    { name: "swimming", likedby: "jeelani" },
    { name: "fifa", likedby: "jeelani" },
  ];
  const [hobbiesObj, setHobbies] = useState(hobbies);
  const [datas, setDatas] = useState([
    2, 4, 1, 23, 12, 45, 34, 32, 65, 45, 56, 76, 31,
  ]);
  const [atmAmount, setAtmAmount] = useState("");
  const [atmResult, setAtmResult] = useState([]);

  //   FOR EACH

  teams.forEach((team) => {
    console.log("team name : ", team.name);
  });

  //   FILTER

  //   first method
  const teamsWon = teams.filter((team) => {
    if (team.won >= 12) {
      return true;
    }
  });
  console.log("Teams won : ", teamsWon);

  //   second method
  const teamsWon2 = teams.filter((team) => team.won >= 14);
  console.log("Teams2 won : ", teamsWon2);

  const teamWonLoss = teams.filter((team) => team.won < 12 && team.draw <= 4);
  console.log("Teams won and loss : ", teamWonLoss);

  //   MAP

  const teamMap = teams.map((team) => {
    return team.name;
  });
  console.log("Teammap : ", teamMap);

  // SORT

  const teamSort = teams.sort((a, b) => (a.won > b.won ? 1 : -1));
  console.log("Sorted Team ::", teamSort);

  // REDUCE - to sum of array
  const reduceGoals = goals.reduce((total, goal) => total + goal, 0);
  console.log("Total : ", reduceGoals);

  const teamWonArr = teams.map((team) => team.won);
  console.log(teamWonArr);
  const teamWon = teamWonArr.reduce(
    (total, teamWonGoal) => total + teamWonGoal,
    0
  );
  console.log(" total team won ::", teamWon);

  //   COMBINED ALL METHODS

  const combinedGoals = goals
    .map((goal) => goal * 2)
    .filter((goal) => goal >= 50)
    .sort((a, b) => a - b)
    .reduce((total, goal) => total + goal, 0);

  console.log("Combined Method Result ::", combinedGoals);

  // checkbox event
  let runtimeClass = "d-block";

  const drpOnchange = (e) => {
    const drpValue = e.target.value;
    const updateHobbies = hobbiesObj.map((hobbyMap) => hobbyMap);
    console.log(drpValue, "---", updateHobbies);

    const finalHobbies = updateHobbies.filter((element) => {
      return element.likedby === drpValue;
    });
    console.log("finalHobbies::", finalHobbies);
    setHobbies(finalHobbies);
  };

  // ATM functionality
  const atmAmountChange = (e) => {
    const atmInput = e.target.value;
    setAtmAmount(atmInput);
  };

  const checkAtmAmount = (e) => {
    e.preventDefault();
    let atmInputValue = atmAmount;
    let remainderTwoThousand;
    let remainderFiveHund;
    let remainderHundred;
    let remainderFifty;
    var twoThousand;
    let fiveHundred;
    let hundred;
    let fifty;

    if (atmInputValue > 0) {
      remainderTwoThousand = atmInputValue % 2000;
      twoThousand = Math.floor(atmInputValue / 2000);
      console.log("////////////// ATM PROGRAM ////////////////");
      console.log("There are ", twoThousand, "Two thousands notes.");
      // setAtmResult(twoThousand);
      if (remainderTwoThousand > 500) {
        remainderFiveHund = remainderTwoThousand % 500;
        fiveHundred = Math.floor(remainderTwoThousand / 500);
        console.log("There are ", fiveHundred, "five hundred notes.");
        setAtmResult(fiveHundred);
      }
      if (remainderFiveHund > 100) {
        remainderHundred = remainderFiveHund % 100;
        hundred = Math.floor(remainderFiveHund / 100);
        console.log("There are ", hundred, " hundred notes.");
        setAtmResult(hundred);
      }
      if (remainderHundred >= 50) {
        remainderFifty = remainderHundred % 50;
        fifty = Math.floor(remainderHundred / 50);
        console.log("There are ", fifty, " fifty notes.");
        setAtmResult(fifty);
      }
    }
  };
  console.log("Result :: ", atmResult);

  //   html starts
  return (
    <div className="js-program-main container text-left mb-5 pb-5">
      <h2 className="text-center pt-4">JS Tasks</h2>
      <p className="text-center text-danger">Please check console for more!</p>
      <hr />

      <div>
        {/* map function */}
        <p>
          <b>Given Array:</b>{" "}
          <span className="text-primary">
            {" "}
            [ 2, 4, 1, 23, 12, 45, 34, 32, 65, 45, 56, 76, 31]
          </span>
        </p>
        <h4>
          <b> Map Function:</b> Loop through array and add 2 to all digits
        </h4>
        {datas.map((data) => (
          <span className="mr-2">{data + 2}</span>
        ))}
        <hr />
        {/* filter function */}
        <h4>
          <b>Filter Function:</b> Number greater then 20
        </h4>
        {datas.filter((data) => data > 20)}
        <hr />

        {/* sort function */}
        <h4>
          <b>Sort function:</b> Accesending order
        </h4>
        {datas.sort((a, b) => a - b)}
        <hr />

        {/* reduce function */}
        <h4>
          <b>Reduce function:</b> Add all array elements
        </h4>
        {datas.reduce((total, data) => total + data, 0)}

        {/* forEach */}
        <h4>For Each Loop: Teams name</h4>
        {teams.forEach((team) => console.log(team.name))}
        <p>check console!</p>
      </div>

      {/* ********** ATM Functionality ********** */}
      <div className="container">
        <h2>ATM Program</h2>
        <div>
          <form className="d-flex">
            <input
              type="text"
              placeholder="Enter Amount"
              className="form-control w-25"
              onChange={atmAmountChange}
              value={atmAmount}
              required
            />
            <input
              type="submit"
              value="Check"
              className="btn btn-primary w-25"
              onClick={checkAtmAmount}
            />
          </form>
        </div>
        <div className="atm-output">
          <p>Atm Result : check console</p>
        </div>
      </div>

      <div className="row my-5">
        <div className="w-100">
          <label className="mr-3">Select Person:</label>
          <select onChange={drpOnchange}>
            <option value="jeelani">Jeelani</option>
            <option value="aqib">Aqib</option>
            <option value="junaid">Junaid</option>
          </select>
        </div>

        <div
          className="checkboxes d-flex align-items-center flex-wrap justify-content-between"
          id="hobbies"
        >
          {hobbiesObj.map((hobby) => (
            <div className={`check-single`}>
              <label className="mr-2"> {hobby.name}</label>
              <input type="checkbox" data-attr={hobby.likedby} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JsPrograms;
