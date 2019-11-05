//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Timer from "./Timer";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [countHome, setHomeCount] = useState(0);
  const [countAway, setAwayCount] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{countHome}</div>
          </div>
          <div className="timer"><Timer/></div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{countAway}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now    we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = { () => setHomeCount(countHome + 5)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = { () => setHomeCount(countHome + 3)}>Home Field Goal</button>
          <button className="awayButtons__reset" onClick = { () => setHomeCount(0)}>Home Reset</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = { () => setAwayCount(countAway + 5)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = { () => setAwayCount(countAway + 3)}>Away Field Goal</button>
          <button className="awayButtons__reset" onClick = { () => setAwayCount(0)}>Away Reset</button>
        </div>
      </section>
    </div>
  );
}



export default App;
