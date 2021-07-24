import React, { Component } from "react";
// import { StateContext } from "./ClassProvider";
import { StateContext } from "./FuncProvider";

class B extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "100px",
          flexDirection: "column",
          background: "red",
          color: "#fff",
          fontSize: "1.2rem",
          padding:"30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        B
        <StateContext.Consumer>
          {(context) => (
              <>
              <h2>name:{context.state.name}</h2>
              <h2>last name:{context.state.lastName}</h2>

              </>
          )}
        </StateContext.Consumer>
        {this.props.children}
      </div>
    );
  }
}

export default B;
