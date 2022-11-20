import React from "react";
import Response from "../Component/Response";
import { useStateValue } from "../Context/StateProvider";
import useGoogleSearch from "../Hooks/useGoogleSearch";

function Search() {
  const [{ term }, dispatch] = useStateValue();
  //Live Call Api
  // const {data} =useGoogleSearch(term)
  const data = Response;
  console.log(data, "form local data");
  return (
    <section className="search_page_wrapper">
      <div className="search_header_area">
        <h2>{term} </h2>
      </div>
    </section>
  );
}

export default Search;
