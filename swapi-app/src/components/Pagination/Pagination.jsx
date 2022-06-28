import { useDispatch, useSelector } from "react-redux";
import CardList from "./CardList";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const dataLimit = 10;

const Pagination = (props) => {
  const { t } = useTranslation();
  const [isFromApi, setIsFromApi] = useState(true);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageNumberApi, setPageNumberApi] = useState(0);
  const dispatch = useDispatch();

  const customCharactersData = useSelector(
    (state) => state.swData.customCharacters
  );

  const charactersDataArray = useSelector((state) => state.swData.results);
  const charactersData =
    charactersDataArray.length > 0 ? charactersDataArray[pageNumberApi] : [];

  const next = charactersData?.next;
  const previous = charactersData?.previous;

  const lastPage = Math.ceil(customCharactersData.length / dataLimit);
  const startIndex = currentPageNumber * dataLimit - dataLimit;
  const endIndex = startIndex + dataLimit;

  const loadPageHandler = (e) => {
    if (isFromApi) {
      const testPage =
        e.target.name === "next" ? pageNumberApi + 1 : pageNumberApi - 1;
      if (!charactersDataArray[testPage])
        dispatch({
          type: "FETCH_SWDATA",
          payload: e.target.name === "next" ? next : previous,
        });
      setPageNumberApi(testPage);
    } else
      setCurrentPageNumber((prevPageNum) =>
        e.target.name === "next" ? prevPageNum + 1 : prevPageNum - 1
      );
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="self-center mb-10 mt-4">
          <ButtonComponent
            isDisabled={isFromApi ? !previous : !(currentPageNumber > 1)}
            name="prev"
            onClick={loadPageHandler}
          >
            🡰
          </ButtonComponent>
          <button
            className="text-white border-2 border-solid p-2 rounded-md"
            onClick={() => setIsFromApi((prevState) => !prevState)}
          >
            {!isFromApi ? "SWAPI" : t("paging.custom")}
          </button>
          <ButtonComponent
            isDisabled={isFromApi ? !next : currentPageNumber >= lastPage}
            name="next"
            onClick={loadPageHandler}
          >
            🡲
          </ButtonComponent>
        </div>

        <CardList
          fromApi={isFromApi}
          pageNumberApi={pageNumberApi}
          openModal={props.openModal}
          filter={props.filter}
          data={
            isFromApi
              ? charactersData?.results
              : customCharactersData.slice(startIndex, endIndex)
          }
        ></CardList>
      </div>
    </>
  );
};

const ButtonComponent = (props) => {
  return (
    <button
      disabled={props.isDisabled}
      name={props.name}
      onClick={props.onClick}
      className="bg-orange-300 w-10 rounded-md mx-10 h-10"
    >
      {props.isDisabled ? "❌" : props.children}
    </button>
  );
};

export default Pagination;
