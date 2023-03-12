import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState("null");
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);
  const choices = ["rock", "paper", "scissors"];

  const handleOnClick = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "scissorspaper" ||
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock"
      ) {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User gets the point!");
        if (updatedUserPoints === 5) {
          setResult("User Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setTurnResult("Computer gets the point!");
        if (updatedComputerPoints === 5) {
          setResult("Computer Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === "paperpaper" ||
        comboMoves === "rockrock" ||
        comboMoves === "scissorsscissors"
      ) {
        setTurnResult("No one gets a point!");
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <>
      <div className="App">
        <h1 className="heading">Rock-Paper-Scrissor</h1>
        <div className="choice">
          <div className="choice-user">
            <img
              className="user-hand"
              src={`../images/${userChoice}.png`}
              alt=""
            />
          </div>
          <div className="choice-computer">
            <img
              className="computer-hand"
              src={`../images/${computerChoice}.png`}
              alt=""
            />
          </div>
        </div>
        <div className="score">
          <h1>User Points: {userPoints}</h1>
          <h1>Computer Points: {computerPoints}</h1>
        </div>
        <div className="button-div">
          {choices.map((choice, index) => (
            <button
              className="button"
              key={index}
              onClick={() => handleOnClick(choice)}
            >
              {choice}
            </button>
          ))}
        </div>

        <div className="result">
          <h1>Turn Result: {turnResult}</h1>
          <h1>Final Result: {result}</h1>
        </div>

        <div className="button-div">
          {gameOver && (
            <button className="button" onClick={() => reset()}>
              Restart Game?
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

//choice logic of user
////trigger when button click
////user option will pass in the onClick function
////

//wins condition
//

// button click
// const [computerChoice, setComputerChoic] = useState()
// const [userPt, setUserPt] = useState();
// const [computerPt, setComputerPt]

// const myFunction = (userChoice) => {
//     setComputerChoic(() => {
//         return genComputerChoice()
//     })

//     // userChoice and computerChoice

//     if(computerChoice === 'rock' && userChoice === 'paper'){
//     } else if()
// }

// const genComputerChoice = () => {
//     /// ssome code
//     // return computer choice
// }

///////////////////////////////
//CHAT GPT

// const results = {
//   rock: { scissors: "User", paper: "Computer" },
//   paper: { rock: "User", scissors: "Computer" },
//   scissors: { paper: "User", rock: "Computer" },
// };

// const winner = results[userChoice][computerChoice];
// if (winner === "User") {
//   setUserPoints(userPoints + 1);
//   setTurnResult("User gets the point!");
// } else if (winner === "Computer") {
//   setComputerPoints(computerPoints + 1);
//   setTurnResult("Computer gets the point!");
// } else {
//   setTurnResult("No one gets a point!");
// }

// const [points, setPoints] = useState({ user: 0, computer: 0 });

// // ...

// const winner = results[userChoice][computerChoice];
// if (winner === "User") {
//   setPoints({ ...points, user: points.user + 1 });
//   setTurnResult("User gets the point!");
// } else if (winner === "Computer") {
//   setPoints({ ...points, computer: points.computer + 1 });
//   setTurnResult("Computer gets the point!");
// } else {
//   setTurnResult("No one gets a point!");
// }
