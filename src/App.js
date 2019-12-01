import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Goals from "./pages/Goals";
import Home from "./pages/Home";
import PassCalendar from "./pages/PassCalendar";
import Quotes from "./pages/Quotes";
import StudyTips from "./pages/StudyTips";
import Planning from "./pages/Planning";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Router>
        <Switch>
          <Route exact to="/" component={Home} />
          <Route to="./goals" component={Goals} />
          <Route to="./planning" component={Planning} />
          <Route to="./quotes" component={Quotes} />
          <Route to="./study-tips" component={StudyTips} />
          <Route to="/pass-calendar" component={PassCalendar} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
