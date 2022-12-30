import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TestingPage() {
  const [searchBtn, setSearchBtn] = useState(true);
  const navigate = useNavigate();
  const handleSearch = () => {
    alert("This is last time for you?");
    localStorage.setItem("searchCount", 0);
    localStorage.setItem("searchAgainCount", 1);
    setTimeout(() => {
      console.log("running search");
      navigate("/search");
    }, 500);
  };
  useEffect(() => {
    const getsearchAgainCount = localStorage.getItem("searchAgainCount");
    if (getsearchAgainCount >= 1) {
      setSearchBtn(false);
    }
  }, []);
  return (
    <section className="testing_wrapper">
      <div className="testing_content_area">
        <h3>Why are you testing me ☹</h3>
        <h4>
          This is just demo project , <b>not google real search</b>{" "}
        </h4>
        {searchBtn && (
          <button
            type="button"
            className="search_again_btn"
            onClick={handleSearch}
          >
            Search Again{" "}
          </button>
        )}
      </div>
    </section>
  );
}

export default TestingPage;
