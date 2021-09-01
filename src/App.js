import "./App.css";
import Header from "./components/header";
import Slider from "./components/slider";
import Contact from "./components/contact";
import About from "./components/about";
import Shop from "./components/shop";
import ItemDetails from "./components/itemDetails";
import TodoApp from "./components/TodoAppModule/TodoApp";
import Gallery from "./components/gallery";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokimonList from "./components/PokimonApp/PokimonList";
import TaskTracker from "./components/TaskTrackerApp/TaskTracker";
import Tasks from "./components/TaskTrackerApp/Tasks";
import JsPrograms from "./components/javascriptPrograms/jsPrograms";
import MainTracker from "./components/ExpenseTracker/MainTracker";

import { TaskProvider } from "./components/ContextApi/TaskContext";
import Weather from "./components/WeatherApp/Weather";
import CovidTracker from "./components/CovidApp/CovidTracker";
import TableComponent from "./components/TableData/Table";
import MapBox from "./components/MapBoxApp/MapBox";

import "mapbox-gl/dist/mapbox-gl.css";
import Student from "./components/StudentCrud/Student";
import AddStudent from "./components/StudentCrud/AddStudent";
import UpdateStudent from "./components/StudentCrud/UpdateStudent";
import GanntChartApp from "./components/GanntChart/GanntChartApp";
import PixelbayApp from "./components/PixelbayApp/PixelbayApp";

function App() {
  const getRandomData = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = response.json();
    console.log(data);
  };

  useEffect(() => {
    if (window.location.pathname == "/weatherApp") {
      document.getElementById("jbNav").classList.add("d-none");
    }
    getRandomData();
  });

  return (
    <TaskProvider>
      <Router>
        <Header />
        <div className="jb-app container-fluid p-0">
          <div></div>
          <div className="jb-structure">
            <Switch>
              <Route path="/" exact component={Slider} />
              <Route path="/about" component={About} />
              <Route path="/shop" exact component={Shop} />
              {/* <ItemDetails path="/shop/:id" component={ItemDetails} /> */}
              <Route path="/todo" component={TodoApp} />
              <Route path="/pokimon" component={PokimonList} />
              <Route path="/tasktracker" component={TaskTracker} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/jsPrograms" component={JsPrograms} />
              <Route path="/expenseTracker" component={MainTracker} />
              <Route path="/weatherApp" component={Weather} />
              <Route path="/covidTracker" component={CovidTracker} />
              <Route path="/mapbox" component={MapBox} />
              <Route path="/student" component={Student} />
              <Route path="/pixelbay" component={PixelbayApp} />
              <Route path="/addStudent" component={AddStudent} />
              <Route path="/updateStudent/:id" component={UpdateStudent} />
              <Route path="/table" component={TableComponent} />
              <Route path="/ganntchart" component={GanntChartApp} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
