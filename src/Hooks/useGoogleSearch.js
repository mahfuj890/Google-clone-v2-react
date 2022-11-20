import React, { useEffect, useState } from "react";

function useGoogleSearch(term) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          import.meta.env.VITE_APP_API
        }&cx=${import.meta.env.VITE_APP_ID}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
}

export default useGoogleSearch;
