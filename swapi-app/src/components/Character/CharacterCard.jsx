import classes from "./CharacterCard.module.css";

const CharacterCard = (props) => {
  return (
    <>
      <div className={classes.card}>
        <p>Name: {props.name}</p>
        <p>Gender: {props.gender}</p>
        {props.fromDB && <button onClick={props.onFilmsClick}>Films</button>}
      </div>
    </>
  );
};

export default CharacterCard;
