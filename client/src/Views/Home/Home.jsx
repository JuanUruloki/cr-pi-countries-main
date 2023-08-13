import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivities, getCountries } from "../../Redux/actions";
import Cards from "../../components/cards/Cards";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities())
  }, [dispatch]);

  return (
    <div>
      

      <Cards></Cards>
      
    </div>
  );
};

export default Home;
