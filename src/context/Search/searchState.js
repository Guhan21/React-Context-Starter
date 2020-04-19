import React, { useReducer } from "react";
import SearchContext from "./searchContext";
import searchReducer from "./searchReducer";
import { SET_LOADING } from "../types";

const SearchState = (props) => {
  const initialState = false;

  const [state, dispatch] = useReducer(searchReducer, initialState);

  // Set Loading
  const setLoading = (loadingState) => {
    dispatch({
      type: SET_LOADING,
      payload: loadingState,
    });
  };

  return (
    <SearchContext.Provider
      value={{
        loading: state,
        setLoading,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
