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

function App() {
  const getRandomData = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = response.json();
    console.log(data);
  };

  useEffect(() => {
    getRandomData();
  });

  return (
    <Router>
      <Header />
      <div className="jb-app container-fluid p-0">
        <div></div>
        <div className="jb-structure">
          <Switch>
            <Slider path="/" exact component={Slider} />
            <About path="/about" component={About} />
            <Shop path="/shop" exact component={Shop} />
            <ItemDetails path="/shop/:id" component={ItemDetails} />
            <TodoApp path="/todo" component={TodoApp} />
            <PokimonList path="/pokimon" component={PokimonList} />
            <TaskTracker path="/tasktracker" component={TaskTracker} />
            <Gallery path="/gallery" component={Gallery} />
            <Contact path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
