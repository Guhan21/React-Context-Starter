import React, { useReducer } from "react";
import ListContext from "./listContext";
import ListReducer from "./listReducer";
import { SET_LIST } from "../types";

const ListState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(ListReducer, initialState);

  // Set List
  const setList = (users) => {
    dispatch({
      type: SET_LIST,
      payload: users,
    });
  };

  return (
    <ListContext.Provider
      value={{
        list: state,
        setList,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListState;
