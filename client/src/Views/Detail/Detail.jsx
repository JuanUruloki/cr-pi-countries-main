import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../Redux/actions";
import styles from "./Detail.module.css"


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state)=> state.foundCountry)
  
  
  useEffect(() => {
    
      dispatch(getCountryById(id))
    }, [dispatch,id]);
    
    
  return (
    <div className={styles.container}>
      {countryDetail ?
        
        <div className={styles.card}>  
            {/* <h3 id={countryDetail.id}/> */}
            <h2> Name: {countryDetail.name} </h2>
            <h4> Continent: {countryDetail.continent}</h4>
            <h4> Capital: {countryDetail.capital} </h4>
            <h4> Subregion: {countryDetail.subregion}</h4>
            <h4> Area: {countryDetail.area} m²</h4>
            <h4> Population: {countryDetail.population} habitants</h4>
            <img className={styles.flag} src={countryDetail.flag} alt="Bandera del pais"/>
        </div> : <p>Cargando...</p>
}  
      
    </div>
      );
};

export default Detail;
