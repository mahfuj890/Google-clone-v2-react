import { BsGrid3X3Gap } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Button from "../Component/Button";

function Home() {
  return (
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
        <form action="" className="form_area">
          <input type="search" />
          <div className="search_icon">
            <button type="submit">
              <BiSearch />
            </button>
          </div>
          <div className="search_btn_area">
            <Button title="Google Search" />
            <Button title="I'm Feeling Lucky" />
          </div>
        </form>
      </section>
    </section>
  );
}

export default Home;
