const Card = ({ id, name, image, continent }) => {
  return (
    <div>
      <img src={image} alt="bandera" />
      <p>Name: {name}</p>
      <p>Continent: {continent}</p>
    </div>
  );
};

export default Card;
