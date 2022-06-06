import React, { useReducer, useState } from "react";

const initialState = {
  counter: 0,
};

type ACTIONS =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function reducer(state: typeof initialState, action: ACTIONS) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      throw new Error("Invalid Action");
  }
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [payload, setPayload] = useState(1);

  return (
    <div>
      <div>
        <strong>{state.counter}</strong>
      </div>
      <br />
      <br />
      <div>
        <input
          type="number"
          value={payload}
          onChange={(e) => setPayload(parseInt(e.target.value))}
        />
      </div>
      <br />
      <button onClick={() => dispatch({ type: "increment", payload })}>
        Increment
      </button>
      {`<-------->`}
      <button onClick={() => dispatch({ type: "decrement", payload })}>
        Decrement
      </button>
    </div>
  );
};

export default UseReducerComponent;
