// import SearchBar from "../../Views/Home/search_bar/SearchBar";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar"
const NavBar = () => {
  return(
  <div className= {style.container} >
   <SearchBar/>
    <Link className={style.link} to="/home">
      <button>Inicio</button>
    </Link>
    <Link className={style.link} to="/form">
      <button> + Actividad</button>
    </Link>
    
  </div>
  )
};

export default NavBar;
