import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../Redux/actions";
import Cards from "../../components/cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";


const Home = ()=>{
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])


    return(
        <div>
            <div><SearchBar/></div>
            
            <Cards></Cards>
        </div>
    )
}

export default Home;