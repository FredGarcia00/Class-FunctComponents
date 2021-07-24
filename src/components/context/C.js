import React from "react";
import { useStateContext } from "./FuncProvider";

const C = (props) => {
  const context = useStateContext();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100px",
        flexDirection: "column",
        background: "blue",
        color: "#fff",
        fontSize: "1.2rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      C
      <input type="text" 
            value={context.state.name}
            onChange={context.handleChange}/><h2>name:{context.state.name}</h2>
      <h2>last name:{context.state.lastName}</h2>
      {props.children}
    </div>
  );
};

export default C;
