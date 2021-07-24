import React from "react";
import ReactDOM from "react-dom";
import SimpleCard from "./components/Card";
import Button from "./components/Button";
import Counter from "./components/counterClass/Counter";
// import {
//   GlobalStateProvider,
//   StateContext,
// } from "./components/context/ClassProvider";
import {
  GlobalStateProvider,
  StateContext,
} from "./components/context/FuncProvider";
import A from './components/context/A';
import B from './components/context/B';
import C from './components/context/C';

import "./css/main.css";




const App = () => {
  let data = [
    {
      title: "Word of the day",
      definition: "Well meaning and kindly",
    },
    {
      title: "Word of the day2",
      definition: "Well meaning and kindly",
    },
    {
      title: "Word of the day3",
      definition: "Well meaning and kindly",
    },
  ];
  const printCard = () => {
    //tranditional loop to print data out
    // let result = [];
    // data.forEach((data) => {
    //      result.push(<SimpleCard cardData={data}/>);
    // });
    // return result;

    //map loop to print data out
    return data.map((data, index) => {
      return <SimpleCard key={index} cardData={data} />;
    });
  };
  return (
    <GlobalStateProvider>
      <StateContext.Consumer>
        {(context) => {
          console.log(context);
          return (
          <>
            <Heading
              content="Top JS Frameworks"
              author="Fred"
              periods={["", ".", "..", "..."]}
            >
            </Heading>
            <input type="text" 
            value={context.state.name}
            onChange={context.handleChange}/>
              <h1>name:{context.state.name}</h1>
              <A>
                <B>
                  <C/>
                </B>
              </A>
          </>
        )}
        }

        {/* {printCard()} */}
      </StateContext.Consumer>
    </GlobalStateProvider>
  );
};

const Heading = (props) => {
  return (
    <>
      <h1>
        {props.content} {props.periods === undefined ? "" : props.periods[3]}
        {props.children}
      </h1>

      {/* <h2>{props.author === undefined ? "" : props.author}</h2> */}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
