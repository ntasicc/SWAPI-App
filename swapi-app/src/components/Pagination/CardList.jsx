import CharacterCard from "../Character/CharacterCard/CharacterCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { characterActions } from "../../store/character-slice";
import { swDataActions } from "../../store/swData-slice";

const CardList = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const characterData = props.data || [];

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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 gap-y-4 justify-evenly mx-3 mb-4">
      {cards.length > 0 ? (
        cards
      ) : (
        <p className="text-center mt-4 col-start-1 col-end-5 text-2xl text-amber-100 italic">
          There are currently no characters. You can add them by clicking on the
          "Add Character" button
        </p>
      )}
    </div>
  );
};

export default CardList;
