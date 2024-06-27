import React, { useState } from "react";
import Circle from "./circle";
import Box from "./Box";
import Button from "./Button";
import Logo from "../Capture.PNG";

const FrontEnd = () => {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [playerPositions, setPlayerPositions] = useState([
    { color: "red", position: 0 },
    { color: "green", position: 0 },
    { color: "blue", position: 0 },
    { color: "yellow", position: 0 },
  ]);
  const [diceValue, setDiceValue] = useState(null);

  const rollDice = () => {
    const newDiceValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newDiceValue);
    movePawn(newDiceValue);
  };

  const movePawn = (diceValue) => {
    setPlayerPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[currentPlayer].position += diceValue;
      return newPositions;
    });
    setCurrentPlayer((prevPlayer) => (prevPlayer + 1) % 4);
  };

  return (
    <div>
      <Circle top="50px" left="40px" />
      <Circle top="50px" left="140px" />
      <Circle top="150px" left="40px" />
      <Circle top="150px" left="140px" />

      <Circle top="50px" left="440px" />
      <Circle top="50px" left="550px" />
      <Circle top="150px" left="440px" />
      <Circle top="150px" left="550px" />

      <Circle top="450px" left="40px" />
      <Circle top="450px" left="140px" />
      <Circle top="550px" left="40px" />
      <Circle top="550px" left="140px" />

      <Circle top="450px" left="440px" />
      <Circle top="450px" left="550px" />
      <Circle top="550px" left="440px" />
      <Circle top="550px" left="550px" />

      <Box height="250px" width="250px" color="red" top="400px" left="0px" />
      <Box height="250px" width="250px" color="green" top="0px" left="0px" />
      <Box height="250px" width="250px" color="blue" top="400px" left="400px" />
      <Box height="250px" width="250px" color="yellow" top="0px" left="400px" />

      <div id="grid">
        <Box
          height="50px"
          dir="2"
          width="50px"
          type="N"
          color="white"
          top="0px"
          left="250px"
        />
        <Box
          height="50px"
          dir="0"
          width="50px"
          type="N"
          color="white"
          top="50px"
          left="250px"
        />
        <Box
          height="50px"
          dir="0"
          width="50px"
          type="N"
          color="white"
          top="100px"
          left="250px"
        />
        <Box
          height="50px"
          dir="0"
          width="50px"
          type="N"
          color="white"
          top="150px"
          left="250px"
        />
        <Box
          height="50px"
          dir="0"
          width="50px"
          type="N"
          color="white"
          top="200px"
          left="250px"
        />
        <Box
          height="50px"
          dir="2"
          width="50px"
          type="NS"
          color="white"
          top="0px"
          left="300px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="yellow"
          top="50px"
          left="300px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="yellow"
          top="100px"
          left="300px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="yellow"
          top="150px"
          left="300px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="yellow"
          top="200px"
          left="300px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="white"
          top="0px"
          left="350px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="S"
          color="yellow"
          top="50px"
          left="350px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="white"
          top="100px"
          left="350px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="white"
          top="150px"
          left="350px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="N"
          color="white"
          top="200px"
          left="350px"
        />

        <Box
          height="50px"
          dir="7"
          width="50px"
          type="N"
          color="white"
          top="400px"
          left="250px"
        />
        <Box
          height="50px"
          dir="0"
          width="50px"
          type="N"
          color="white"
          top="450px"
          left="250px"
        />
        <Box
          height="50px"
          dir="0"
          width="50px"
          type="N"
          color="white"
          top="500px"
          left="250px"
        />
        <Box
          height="50px"
          dir="0"
          width="50px"
          type="S"
          color="red"
          top="550px"
          left="250px"
        />
        <Box
          height="50px"
          dir="0"
          width="50px"
          type="N"
          color="white"
          top="600px"
          left="250px"
        />
        <Box
          height="50px"
          dir="0"
          width="50px"
          type="N"
          color="red"
          top="400px"
          left="300px"
        />
        <Box
          height="50px"
          dir="0"
          width="50px"
          type="N"
          color="red"
          top="450px"
          left="300px"
        />
        <Box
          height="50px"
          dir="0"
          width="50px"
          type="N"
          color="red"
          top="500px"
          left="300px"
        />
        <Box
          height="50px"
          dir="0"
          width="50px"
          type="N"
          color="red"
          top="550px"
          left="300px"
        />
        <Box
          height="50px"
          dir="6"
          width="50px"
          type="NS"
          color="white"
          top="600px"
          left="300px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="white"
          top="400px"
          left="350px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="white"
          top="450px"
          left="350px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="white"
          top="500px"
          left="350px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="white"
          top="550px"
          left="350px"
        />
        <Box
          height="50px"
          dir="6"
          width="50px"
          type="N"
          color="white"
          top="600px"
          left="350px"
        />

        <Box
          height="50px"
          dir="6"
          width="50px"
          type="N"
          color="blue"
          top="250px"
          left="0px"
        />
        <Box
          height="50px"
          dir="6"
          width="50px"
          type="N"
          color="white"
          top="250px"
          left="50px"
        />
        <Box
          height="50px"
          dir="6"
          width="50px"
          type="N"
          color="blue"
          top="250px"
          left="100px"
        />
        <Box
          height="50px"
          dir="6"
          width="50px"
          type="N"
          color="white"
          top="250px"
          left="150px"
        />
        <Box
          height="50px"
          dir="6"
          width="50px"
          type="S"
          color="white"
          top="250px"
          left="200px"
        />
        <Box
          height="50px"
          dir="6"
          width="50px"
          type="N"
          color="blue"
          top="300px"
          left="0px"
        />
        <Box
          height="50px"
          dir="6"
          width="50px"
          type="N"
          color="blue"
          top="300px"
          left="50px"
        />
        <Box
          height="50px"
          dir="6"
          width="50px"
          type="N"
          color="blue"
          top="300px"
          left="100px"
        />
        <Box
          height="50px"
          dir="6"
          width="50px"
          type="N"
          color="blue"
          top="300px"
          left="150px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="NS"
          color="white"
          top="300px"
          left="200px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="N"
          color="white"
          top="350px"
          left="0px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="N"
          color="white"
          top="350px"
          left="50px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="N"
          color="white"
          top="350px"
          left="100px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="S"
          color="white"
          top="350px"
          left="150px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="N"
          color="white"
          top="350px"
          left="200px"
        />

        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="white"
          top="250px"
          left="400px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="white"
          top="250px"
          left="450px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="green"
          top="250px"
          left="500px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="S"
          color="white"
          top="250px"
          left="550px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="green"
          top="250px"
          left="600px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="white"
          top="300px"
          left="400px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="white"
          top="300px"
          left="450px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="green"
          top="300px"
          left="500px"
        />
        <Box
          height="50px"
          dir="4"
          width="50px"
          type="N"
          color="green"
          top="300px"
          left="550px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="NS"
          color="white"
          top="300px"
          left="600px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="N"
          color="green"
          top="350px"
          left="400px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="N"
          color="white"
          top="350px"
          left="450px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="N"
          color="green"
          top="350px"
          left="500px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="S"
          color="white"
          top="350px"
          left="550px"
        />
        <Box
          height="50px"
          dir="3"
          width="50px"
          type="N"
          color="white"
          top="350px"
          left="600px"
        />
      </div>

      <Button
        state={{
          left: "0px",
          top: "300px",
          color: "blue",
          position: playerPositions[0].position,
        }}
        movePawn={movePawn}
      />
      <Button
        state={{
          left: "0px",
          top: "300px",
          color: "green",
          position: playerPositions[1].position,
        }}
        movePawn={movePawn}
      />
      <Button
        state={{
          left: "0px",
          top: "300px",
          color: "red",
          position: playerPositions[2].position,
        }}
        movePawn={movePawn}
      />
      <Button
        state={{
          left: "0px",
          top: "300px",
          color: "yellow",
          position: playerPositions[3].position,
        }}
        movePawn={movePawn}
      />

      <button
        style={{
          height: "50px",
          width: "100px",
          left: "650px",
          top: "300px",
          position: "absolute",
        }}
        onClick={rollDice}
      >
        Roll Dice
      </button>

      {diceValue !== null && (
        <div
          style={{
            position: "absolute",
            left: "650px",
            top: "360px",
            fontSize: "24px",
          }}
        >
          Dice Value: {diceValue}
        </div>
      )}

      <img
        src={Logo}
        alt="Logo"
        height="200px"
        width="200px"
        style={{ position: "absolute", left: "250px", top: "250px" }}
      />
    </div>
  );
};

export default FrontEnd;

