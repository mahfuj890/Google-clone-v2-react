import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Form from "../Component/Form";
import Response from "../Component/Response";
import { useStateValue } from "../Context/StateProvider";
import useGoogleSearch from "../Hooks/useGoogleSearch";
import { BiSearch, BiImages, BiNews } from "react-icons/bi";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Footer from "../Section/Footer";
function Search() {
  const [inputForm, setInputForm] = useState("");
  const [serchValueCount, setSerchValueCount] = useState(0);
  const [{ term }, dispatch] = useStateValue();
  //Live Call Api
  // const {data} =useGoogleSearch(term)
  const data = Response;
  const navigate = useNavigate();

  const getCountValue = localStorage.getItem("searchCount");
  const handleChange = (e) => {
    setInputForm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_SEARCH_TERM",
      term: inputForm,
    });
    setSerchValueCount(() => serchValueCount + 1);
    localStorage.setItem("searchInput", inputForm);
    localStorage.setItem("searchCount", serchValueCount);

    if (getCountValue >= 10) {
      navigate("/testing");
    }
  };

  //Get value from localStorage
  useEffect(() => {
    const getValue = localStorage.getItem("searchInput");
    const getTotalValue = localStorage.getItem("searchTotal");

    if (getValue?.length > 0) {
      setInputForm(getValue);
    }

    if (getCountValue >= 10) {
      navigate("/testing");
    }
  }, []);

  return (
    <>
      <section className="search_page_wrapper">
        <div className="search_header_area">
          <div className="google_logo">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="logo"
            />
          </div>
          <div className="serach_page_box_area">
            <Form
              inputValue={inputForm}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <div className="search_menu_area">
              <ul>
                <li>
                  <BiSearch size={16} /> <span>All</span>
                </li>
                <li>
                  <BiImages size={16} /> <span>Images</span>
                </li>
                <li>
                  <BiNews size={16} /> <span>News</span>
                </li>
                <li>
                  <AiOutlinePlaySquare size={16} /> <span>Videos</span>
                </li>
                <li>
                  <HiOutlineDotsVertical size={16} /> <span>More</span>
                </li>
              </ul>
              <div>
                <Link to={"#"}>Tools</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="search_header_area">
          <div></div>
          <div className="serach_conent_wrapper">
            <div className="search_timing_area">
              <p>
                About {data?.searchInformation?.formattedTotalResults} results (
                {data?.searchInformation?.formattedSearchTime} seconds) for{" "}
                {term}{" "}
              </p>
            </div>
            {data?.items.map((item, index) => {
              return (
                <div className="serach_result_item" key={index}>
                  <a className="search_link" href={item?.link}>
                    {item?.pagemap?.cse_image?.length > 0 &&
                      item?.pagemap?.cse_image[0]?.src && (
                        <div className="link_short_img">
                          <img src={item?.pagemap?.cse_image[0]?.src} alt="" />
                        </div>
                      )}{" "}
                    {item?.displayLink}
                  </a>
                  <div>
                    <a className="serch_title" href={item?.link}>
                      {item?.title}{" "}
                    </a>
                  </div>
                  <p>{item?.snippet}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Search;
