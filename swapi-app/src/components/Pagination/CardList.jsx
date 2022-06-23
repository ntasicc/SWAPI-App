import CharacterCard from "../Character/CharacterCard";
import classes from "./CardList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { characterActions } from "../../store/character-slice";
import { swDataActions } from "../../store/swData-slice";

const CardList = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const characterData = useSelector((state) =>
    props.fromApi ? state.swData.results : state.swData.customCharacters
  );

  const loadFilms = (characterID) => {
    const character = characterData.filter((c) => c.id === characterID);
    dispatch({
      type: "FETCH_FILMS",
      payload: character[0].films,
    });
    props.openModal();
  };

  const loadCharacterHandler = (characterData) => {
    dispatch(characterActions.addCharacter(characterData));
    navigate("/character");
  };

  const deleteCharacterHandler = (characterID, fromDB) => {
    dispatch(swDataActions.deleteCharacter({ characterID, fromDB }));
  };

  const cards = characterData.map((character, i) => {
    return (
      <CharacterCard
        key={character.id}
        characterData={character}
        loadCharacter={loadCharacterHandler}
        selectFilms={loadFilms}
        deleteCharacter={deleteCharacterHandler}
      ></CharacterCard>
    );
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4 justify-evenly mx-3">
      {cards}
    </div>
  );
};

export default CardList;
