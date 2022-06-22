import { useDispatch, useSelector } from "react-redux";
import classes from "./Pagination.module.css";
import CardList from "./CardList";
import { useState } from "react";

const Pagination = (props) => {
  const [isFromApi, setIsFromApi] = useState(true);
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
        <CardList fromApi={isFromApi} openModal={props.openModal}></CardList>
        <div className={classes.btnGroup}>
          <button disabled={!previous} onClick={loadPreviousPageHandler}>
            🡰
          </button>
          <button onClick={() => setIsFromApi((prevState) => !prevState)}>
            {isFromApi ? "SWAPI" : "Custom"}
          </button>
          <button disabled={!next} onClick={loadNextPageHandler}>
            🡲
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
