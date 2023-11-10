import React, { useState } from "react";

export default function Dice() {
  const [dices, setDices] = useState(1);
  const [message, setMessage] = useState("Roll the dice");
  const [message2, setMessage2] = useState("_________________");

  const roll = () => {
    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
    setDices(num1 + num2);
    setMessage(`You rolled ${num1} + ${num2} = ${num1 + num2}`);
    setMessage2(num1 + num2 >= 7 ? "You win!" : "You lose!");
  };
  const reset =()=>
  {
    setDices(1);
    setMessage("Roll the dice");
    setMessage2("_________________");
  }

  return (
    <div style={{ color: dices >= 7 ? "Red" : "Blue" }}>
      <button onClick= {reset }>Play New game</button> 
      <h1>{message}</h1>
      <button className="custom-button" onClick={roll}>Roll the dice</button>
      <h1>{message2}</h1>
      <h1>{dices}</h1>
    </div>
  );
}
  