// import SearchBar from "../../Views/Home/search_bar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar"
import add from "../../assets/images/add.png"
import home from "../../assets/images/home.png"


const NavBar = () => {
  return(
  <div className= {styles.container} >
    <Link className={styles.link} to="/home">
      <button><img className={styles.home} src={home} alt="home icon" /></button>
    </Link>
    <Link className={styles.link} to="/form">
      <button> <img className={styles.add} src={add} alt="add icon" /></button>
    </Link>
   <SearchBar/>
    
  </div>
  )
};

export default NavBar;
