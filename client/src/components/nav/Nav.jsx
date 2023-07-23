import SearchBar from "../search_bar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  <div>
    <SearchBar />
    <Link to="/home">
      <button className={style.buttons}>Home</button>
    </Link>
    <Link to="/form">
      <button className={style.buttons}>Form</button>
    </Link>
    <Link to="/activities">
      <button className={style.buttons}>Activities</button>
    </Link>
  </div>;
};

export default Nav;
