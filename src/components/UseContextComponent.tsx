import React, { useContext, useState } from "react";
import { users } from "../seeds";
import {
  UserContext,
  UserContextProvider,
  UserState,
  useStore,
  initialState,
} from "../store";

const UseContextComponent = () => {
  const [{ user }, setUser] = useState<UserState>(initialState);
  const newUser = {
    firstName: "Hello",
    lastName: "Context",
  };

  return (
    <UserContextProvider value={{ user, setUser }}>
      <UserComponent />
      <button
        onClick={() => {
          setUser({ user: newUser });
        }}
      >
        Set to Hello Context
      </button>
      <InvokeContextComponent />
    </UserContextProvider>
  );
};

export default UseContextComponent;

const UserComponent = () => {
  const {
    user: { firstName, lastName },
  } = useStore();

  return (
    <h3>
      {firstName} {lastName}
    </h3>
  );
};

const InvokeContextComponent = () => {
  const {
    user: { firstName, lastName },
    setUser,
  } = useContext(UserContext);

  const newUser = users[Math.round(Math.random() * (users.length - 1))];

  return (
    <h3>
      <button
        onClick={(e) => {
          e.preventDefault();
          setUser({ user: newUser });
        }}
      >
        Change Value
      </button>
      <br />
      {firstName} {lastName}
    </h3>
  );
};
