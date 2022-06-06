import React, { useEffect, useMemo, useState } from "react";

interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv?: number;
  ibu?: number;
  logo: string;
  level: number;
}

// function useFetchData(url: string): {
//   data: Beverage[];
//   done: boolean;
// } {
//   const [data, setData] = useState<Beverage[]>([]);
//   const [done, setDone] = useState(false);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data: Beverage[]) => {
//         setData(data);
//         setDone(true);
//       });
//   }, [url]);

//   return { data, done };
// }

// Generic Type Hook
function useFetchData<Payload>(url: string): {
  data: Payload | [];
  done: boolean;
} {
  const [data, setData] = useState<Payload | []>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: Payload) => {
        setData(data);
        setDone(true);
      });
  }, [url]);

  return { data, done };
}

const UseCustomComponent = () => {
  const { data, done } = useFetchData<Beverage[]>("/test.json");

  const portlandTaps = useMemo(
    () => (data || []).filter((bev) => bev.producerLocation.includes("CA")),
    [data]
  );

  return (
    <div>
      {!done && <h6>Loading!!</h6>}
      {done &&
        portlandTaps.map((el) => <img src={el.logo} alt={el.beverageName} />)}
    </div>
  );
};

export default UseCustomComponent;
