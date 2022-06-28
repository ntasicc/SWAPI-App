import { useSelector, useDispatch } from "react-redux";
import CharacterInfoDisplay from "./CharacterInfoDisplay";
import PlanetInfo from "./PlanetInfo";
import useSpinner from "../../../hooks/use-spinner";
import { useTranslation } from "react-i18next";

const CharacterInfo = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const spinner = useSpinner("character");
  const characterData = useSelector((state) => state.character.characterData);
  const fromApi = useSelector((state) => state.character.fromApi);
  const characterHomeworld = useSelector((state) => state.character.homeworld);

  const loadPlanetHandler = () => {
    dispatch({ type: "FETCH_PLANET", payload: characterData.homeworld });
  };

  return (
    <div className="flex flex-col">
      <CharacterInfoDisplay
        characterData={characterData}
      ></CharacterInfoDisplay>
      {fromApi ? (
        characterHomeworld ? (
          <PlanetInfo planet={characterHomeworld} />
        ) : (
          <div className="self-center  mt-10">
            {spinner ? (
              spinner
            ) : (
              <button
                className="animate-bounce text-black font-semibold px-1 py-1 rounded-lg w-28 bg-orange-300 m-auto"
                onClick={loadPlanetHandler}
              >
                {t("characterInfo.planet")}
              </button>
            )}
          </div>
        )
      ) : null}
    </div>
  );
};

export default CharacterInfo;
