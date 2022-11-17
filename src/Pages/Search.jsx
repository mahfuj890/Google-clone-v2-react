import React from "react";
import { useStateValue } from "../Context/StateProvider";

function Search() {
  const [{ term }, dispatch] = useStateValue();

  return (
    <section className="search_page_wrapper">
      <div className="search_header_area">
        <h2>{term} </h2>
      </div>
    </section>
  );
}

export default Search;
