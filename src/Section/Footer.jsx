import { Link } from "react-router-dom";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer_wrapper">
      <div className="location_area">
        <h4>Bangladesh</h4>
      </div>
      <div className="footer_menu_area">
        <ul>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Advertising</Link>
          </li>
          <li>
            <Link to={"/"}>Business</Link>
          </li>
          <li>
            <Link to={"/"}> How Search works </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/"}>Privacy</Link>
          </li>
          <li>
            <Link to={"/"}>Terms</Link>
          </li>
          <li>
            <Link to={"/"}>Settings</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
