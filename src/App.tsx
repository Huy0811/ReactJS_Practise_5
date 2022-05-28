import React, { useState } from "react";
import "./App.css";
import Child from "./components/Child";
import ColorList from "./components/ColorList";
import Header from "./components/Header";
import Parent from "./components/Parent";

const ImgStyle = {
  width: "70px",
  height: "70px",
};

const InitialCommandText = [
  {
    name: "Add",
    style: {
      backgroundColor: "red",
      fontSize: "16px",
      color: "white",
      border: "2px solid grey",
      margin: "5px",
    },
  },
  {
    name: "Update",
    style: {
      backgroundColor: "grey",
      fontSize: "16px",
      color: "blue",
      border: "2px solid grey",
      margin: "5px",
    },
  },
  {
    name: "Delete",
    style: {
      backgroundColor: "yellow",
      fontSize: "16px",
      color: "red",
      border: "2px solid grey",
      margin: "5px",
    },
  },
  {
    name: "Filter",
    style: {
      backgroundColor: "purple",
      fontSize: "16px",
      color: "green",
      border: "2px solid grey",
      margin: "5px",
    },
  },
];

function App() {
  const [commandText, setCommandText] = useState(InitialCommandText);
  return (
    <div className="App">
      <Header style={ImgStyle} />
      <Parent>
        <Child names={commandText} />
      </Parent>
      <ColorList
        handleChange={(event) => {
          setCommandText(
            commandText.map((item) => {
              return {
                ...item,
                style: {
                  ...item.style,
                  color: event.currentTarget.value,
                },
              };
            })
          );
        }}
      />
    </div>
  );
}

export default App;
