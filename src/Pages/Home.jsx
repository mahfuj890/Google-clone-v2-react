import { useState } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Component/Button";
import Footer from "../Section/Footer";
import Form from "../Component/Form";
import { actionTypes } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";

function Home() {
  const [inputForm, setInputForm] = useState("");
  const [{}, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputForm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_SEARCH_TERM",
      term: inputForm,
    });
    localStorage.setItem("searchInput",inputForm)
    navigate("/search");
  };
  return (
    <>
      <section className="main_page_wrapper">
        <header className="header_area">
          <ul>
            <li>
              <Link to={"/"}>Gmail</Link>
            </li>
            <li>
              <Link to={"/"}>Images</Link>
            </li>
            <li>
              <button type="button" className="more_button">
                <BsGrid3X3Gap size={18} color="#5f6368" />
              </button>
            </li>
            <li>
              <button type="button" className="sign_btn">
                Sign Up
              </button>
            </li>
          </ul>
        </header>
        {/* Search Body Section  */}
        <section className="search_wrapper">
          <div className="google_logo">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="logo"
            />
          </div>
          <Form
            inputValue={inputForm}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          >
            <div className="search_btn_area">
              <Button title="Google Search" />
              <Button title="I'm Feeling Lucky" />
            </div>
          </Form>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
