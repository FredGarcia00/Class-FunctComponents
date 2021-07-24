import React, { useState, useEffect, Component } from "react";
import Number from "./Number";
import Button from "./Button";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      goal: 11,
    };
    // used arrow function so it add the bind automatically setCounts
    // this.setCounts = this.setCounts.bind(this);
  }
  setCount = (count) =>{
    this.setState({...this.state, count: count}, () => {
      if (count === this.state.goal) {
        this.setGoal(this.state.goal * 2);
      }
    })
  }
  setGoal = (goal) =>{
    this.setState({...this.state, goal: goal})
  }
  render() {
    return (
      <div className="counter">
      <Number digit={this.state.count} />
      <div className="counter__buttons">
        <Button
          count={this.state.count}
          value="minus"
          setCount={this.setCount}
          goal={this.state.goal}
          setGoal={this.setGoal}
        >
          -
        </Button>
        <Button
          count={this.state.count}
          value="plus"
          setCount={this.setCount}
          goal={this.state.goal}
          setGoal={this.setGoal}
       
        >
          +
        </Button>
        Goal {this.state.goal}
      </div>
    </div>
    );
    
  }
}

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [goal, setGoal] = useState(10);

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



//   return (
    // <div className="counter">
    //   <Number digit={count} />
    //   <div className="counter__buttons">
    //     <Button
    //       count={count}
    //       value="minus"
    //       setCount={setCount}
    //       goal={goal}
    //       setGoal={setGoal}
    //     >
    //       -
    //     </Button>
    //     <Button
    //       count={count}
    //       value="plus"
    //       setCount={setCount}
    //       goal={goal}
    //       setGoal={setGoal}
       
    //     >
    //       +
    //     </Button>
    //     Goal {goal}
    //   </div>
    // </div>
//   );
// }

export default Counter;
