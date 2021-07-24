import React from "react";

function Button({ children, count, setCount, value, goal, setGoal }) {
  const clickedBtn = () => {
    // if (count === goal) {
    //   setGoal(goal * 2);
    // }
    if (value === "plus") {
      setCount(count + 1);
    } else if (value === "minus" && count >= 1) {
      setCount(count - 1);
    } else {
      console.log("error");
    }
  };

  const mouseEnters = (e) => {
    console.log("Mouse went on top of button");
    console.log(e);
  };
  const mouseLeaves = (e) => {
    console.log("Mouse has left button");
    console.log(e);

  };
  return (
    <button
      className="counter__minus"
      onClick={clickedBtn}
      onMouseOver={mouseEnters}
      onMouseLeave={mouseLeaves}
    >
      {children}
    </button>
  );
}

export default Button;
