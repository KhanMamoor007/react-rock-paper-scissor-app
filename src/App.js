import React from "react";
import "./App.css";

function App() {
  const choices = ["rock", "paper", "scissors"];

  return (
    <>
      <div className="App">
        <h1 className="heading">Rock-Paper-Scrissor</h1>
        <div className="choice">
          <div className="choice-user">
            <img className="user-hand" src={`../images/rock.png`} alt="" />
          </div>
          <div className="choice-computer">
            <img className="computer-hand" src={`../images/Paper.png`} alt="" />
          </div>
        </div>
        <div className="score">
          <h1>User Points: 1</h1>
          <h1>Computer Points: 3</h1>
        </div>
        <div className="button-div">
          {choices.map((choice, index) => (
            <button className="button" key={index}>
              {choice}
            </button>
          ))}
        </div>

        <div className="result">
          <h1>Turn Result: </h1>
          <h1>Final Result: </h1>
        </div>

        <div className="button-div">
          <button className="button">Restart Game?</button>
        </div>
      </div>
    </>
  );
}

export default App;
