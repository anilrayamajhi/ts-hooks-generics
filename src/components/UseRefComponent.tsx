import React, { useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return <input type="text" ref={inputRef} />;
};

export default UseRefComponent;
