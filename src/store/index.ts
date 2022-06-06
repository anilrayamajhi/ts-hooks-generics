import { createContext, ReactNode, useContext } from "react";

type UserState = {
  user: {
    firstName: string;
    lastName: string;
  };
  setUser?: any;
};

const initialState: UserState = {
  user: {
    firstName: "Put In",
    lastName: "Bay",
  },
};

// type UserState = typeof initialState;

const UserContext = createContext<UserState>(initialState);

const UserContextProvider = UserContext.Provider;

// interface Props {
//   value: UserState;
//   children: ReactNode;
// }

//// Since the return type of this function is react context provider or tsx
//// Change file extension to .tsx
// const UserContextProvider = ({ value, children }: Props) => {
//   return <UserContext.Provider value={value} children={children} />;
// };

function useStore() {
  return useContext<UserState>(UserContext);
}

export { UserContextProvider, useStore, UserContext, initialState };
export type { UserState };
