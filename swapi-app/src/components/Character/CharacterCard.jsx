import classes from "./CharacterCard.module.css";

const CharacterCard = (props) => {
  return (
    <>
      <div className={classes.card}>
        <div onClick={() => props.loadCharacter(props.characterData)}>
          <p>Name: {props.characterData.name}</p>
          <p>Gender: {props.characterData.gender}</p>
        </div>
        <button
          onClick={(event) =>
            props.deleteCharacter(
              props.characterData.id,
              props.characterData.fromDB
            )
          }
        >
          Delete
        </button>
        {props.characterData.fromDB && (
          <button
            onClick={(event) => props.selectFilms(props.characterData.id)}
          >
            Films
          </button>
        )}
      </div>
    </>
  );
};

export default CharacterCard;
