import {Link} from "react-router-dom";

const Card = ({ id, name, image, continent }) => {
  return (
    <div>
      <img src={image} alt="bandera" />
      <Link to={`/detail/${id}`}>
      <h2>Name: {name}</h2>      
      </Link>
      <h2>Continent: {continent}</h2>
    </div>
  );
};

export default Card;
