import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [val, setVal] = useState(1);

  useEffect(() => {
    if (val < 50) {
      const timer = setInterval(() => {
        setVal((prop) => prop + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [val]);

  return <div>{val}</div>;
};

export default UseEffectComponent;
