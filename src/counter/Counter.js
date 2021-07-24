import React, { useState, useEffect } from "react";
import Number from "./Number";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(10);

  //below is the useEffect hooks

  //   useEffect(() => {
  //       console.log('A: Return every single time');
  //   })
  //   useEffect(() => {
  //       console.log('B: Run on first render');
  //   },[])
  //   useEffect(() => {
  //       console.log('C: Run on first render and every goal changes');
  //   },[goal]);



  return (
    <div className="counter">
      <Number digit={count} />
      <div className="counter__buttons">
        <Button
          count={count}
          value="minus"
          setCount={setCount}
          goal={goal}
          setGoal={setGoal}
        >
          -
        </Button>
        <Button
          count={count}
          value="plus"
          setCount={setCount}
          goal={goal}
          setGoal={setGoal}
       
        >
          +
        </Button>
        Goal {goal}
      </div>
    </div>
  );
}

export default Counter;
