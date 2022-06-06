import React, { ReactElement, ReactNode } from "react";

const Generics = () => {
  return (
    <List items={[1, 2, 3, 4, 5]} render={(str) => <strong>{str}</strong>} />
  );
};

// // generic type ListItem
// function List<ListItem>({
//   items,
//   render,
// }: {
//   items: ListItem[];
//   render: (item: ListItem) => ReactNode;
// }) {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{render(item)}</li>
//       ))}
//     </ul>
//   );
// }

type ListComponent = <ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => ReactElement;

// generic type ListItem arrow function
const List: ListComponent = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default Generics;
