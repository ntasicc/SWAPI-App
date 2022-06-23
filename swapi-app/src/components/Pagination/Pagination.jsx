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
        <div className="self-center mt-16">
          <ButtonComponent
            isDisabled={!previous}
            onClick={loadPreviousPageHandler}
          >
            🡰
          </ButtonComponent>
          <button
            className="text-white border-2 border-solid p-2 rounded-md"
            onClick={() => setIsFromApi((prevState) => !prevState)}
          >
            {isFromApi ? "SWAPI" : "Custom"}
          </button>
          <ButtonComponent isDisabled={!next} onClick={loadNextPageHandler}>
            🡲
          </ButtonComponent>
        </div>
      </div>
    </>
  );
};

const ButtonComponent = (props) => {
  return (
    <button
      disabled={props.isDisabled}
      onClick={props.onClick}
      className="bg-orange-300 w-10 rounded-md mx-10 h-10"
    >
      {props.isDisabled ? "❌" : props.children}
    </button>
  );
};

export default Pagination;
