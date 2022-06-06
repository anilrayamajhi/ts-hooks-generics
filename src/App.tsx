import React from "react";
import "./App.css";
import Generics from "./components/Generics";
import UseContextComponent from "./components/UseContextComponent";
import UseCustomComponent from "./components/UseCustomComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseStateComponent from "./components/UseStateComponent";

function App() {
  return (
    <div className="App">
      <h3>Use State Comp</h3>
      <UseStateComponent />
      <br />
      <hr />
      <h3>Use Effect Comp</h3>
      <UseEffectComponent />
      <br />
      <hr />
      <h3>Use Context Comp</h3>
      <UseContextComponent />
      <br />
      <hr />
      <h3>Use Context Comp</h3>
      <UseReducerComponent />
      <br />
      <hr />
      <h3>Use Ref Comp</h3>
      <UseRefComponent />
      <br />
      <hr />
      <h3>Use Custom Comp</h3>
      <UseCustomComponent />
      <br />
      <hr />
      <h3>Generics</h3>
      <Generics />
    </div>
  );
}

export default App;
