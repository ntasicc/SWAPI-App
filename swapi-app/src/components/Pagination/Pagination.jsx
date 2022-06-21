import { useDispatch, useSelector } from "react-redux";
import CharacterCard from "../Character/CharacterCard";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  const characterData = useSelector((state) => state.swData.results);
  const next = useSelector((state) => state.swData.next);
  const previous = useSelector((state) => state.swData.previous);
  const dispatch = useDispatch();

  const loadNextPageHandler = () => {
    dispatch({
      type: "FETCH_SWDATA",
      payload: next,
    });
  };

  const loadPreviousPageHandler = () => {
    dispatch({
      type: "FETCH_SWDATA",
      payload: previous,
    });
  };

  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.cardContainer}>
          {characterData.map((character, i) => {
            return (
              <CharacterCard
                key={i}
                name={character.name}
                gender={character.gender}
                fromDB={true}
              ></CharacterCard>
            );
          })}
        </div>
        <div>
          <button disabled={!previous} onClick={loadPreviousPageHandler}>
            Previous
          </button>
          <button disabled={!next} onClick={loadNextPageHandler}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
