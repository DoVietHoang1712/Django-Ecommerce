import { createContext, useReducer } from "react";
import reducer, { initState } from "./reducer";

export const Context = createContext();
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  // console.log(state)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
}
export default Provider;