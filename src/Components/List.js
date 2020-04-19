import React, { useContext } from "react";
import ListContext from "../context/List/listContext";
import SearchContext from "../context/Search/searchContext";

const List = () => {
  const listContext = useContext(ListContext);
  const searchContext = useContext(SearchContext);

  const { list } = listContext;
  const { loading } = searchContext;

  if (loading) {
    return <div className="label">Loading..</div>;
  } else if (list !== null) {
    return list.map((user, index) => {
      return (
        <div className="user" key={user.id}>
          <div className="img-block"></div>
          <img src={user.avatar_url} alt={user.login} />
          <div className="userInfo">
            <p>
              <span className="label">User ID: </span>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.login}
              </a>
            </p>
          </div>
        </div>
      );
    });
  }
};

export default List;
