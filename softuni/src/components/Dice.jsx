  function DoubleDice() {
    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
    const result = num1 + num2;
    return (
        <div>
            <h1>Dice Game</h1>
            <p>Rolling two dice...</p>
            <p>You rolled {num1} and {num2}. They sum to {num1 + num2}.</p>
            <p>{num1 === num2 ? "DOUBLES!" : "Not Doubles"}</p>
            <p>{(num1 + num2) >= 6 ? "You Win! result " : "You lose!" }</p>
            <p>{result}</p> 

        </div>
    );
  }
 function Roll() {
    window.location.reload();
  };
    

export default {DoubleDice, Roll};