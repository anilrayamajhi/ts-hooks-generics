import React, { useState } from "react";

const UseStateComponent = () => {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
          Add to array
        </button>
        <pre>{JSON.stringify(arr, null, " ")}</pre>
      </div>
      <div>
        <button onClick={() => setName("M-Audio")}>Set Name</button>
        <pre>{JSON.stringify(name, null, " ")}</pre>
      </div>
    </div>
  );
};

export default UseStateComponent;
