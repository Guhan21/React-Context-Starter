import React, { useState, useContext } from "react";
import axios from "axios";
import ListContext from "../context/List/listContext";
import SearchContext from "../context/Search/searchContext";  

const Search = () => {
  const listContext = useContext(ListContext);
  const searchContext = useContext(SearchContext);

  const [text, setText] = useState("");

  const fetchUser = async () => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    listContext.setList(res.data.items);
    searchContext.setLoading(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    } else {
      searchContext.setLoading(true);
      fetchUser();
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    </div>
  );
};

export default Search;
