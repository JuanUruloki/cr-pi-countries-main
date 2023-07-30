// import SearchBar from "../../Views/Home/search_bar/SearchBar";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return(
  <div className= {style.NavBar} >
   
    <Link to="/home">
      <button>Home</button>
    </Link>
    <Link to="/form">
      <button>Form</button>
    </Link>
    
  </div>
  )
};

export default NavBar;
