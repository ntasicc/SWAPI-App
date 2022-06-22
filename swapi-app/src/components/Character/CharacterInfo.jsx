import { useSelector, useDispatch } from "react-redux";
import classes from "./CharacterInfo.module.css";

const CharacterInfo = () => {
  const dispatch = useDispatch();
  const characterData = useSelector((state) => state.character.characterData);
  const characterHomeworld = useSelector((state) => state.character.homeworld);
  const loadPlanetHandler = () => {
    console.log("Load planet...");
    dispatch({ type: "FETCH_PLANET", payload: characterData.homeworld });
  };
  console.log(characterHomeworld);
  return (
    <div className={classes.mainContainer}>
      <p>{characterData.name}</p>
      {characterData.fromDB ? (
        characterHomeworld ? (
          <p>{characterHomeworld.name}</p>
        ) : (
          <button onClick={loadPlanetHandler}>Planet</button>
        )
      ) : null}
    </div>
  );
};

export default CharacterInfo;
