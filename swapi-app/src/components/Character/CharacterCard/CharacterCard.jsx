import { useTranslation } from "react-i18next";

const CharacterCard = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="border-solid border-yellow-300 flex flex-col bg-stone-800 text-white rounded-3xl border-2 p-2 shadow-black shadow-lg">
        <div
          onClick={() => props.loadCharacter(props.characterData)}
          className="text-center mb-4 mt-2"
        >
          <p>
            <span className="text-gray-300 italic">
              {t("characterCard.name")}
            </span>
            {props.characterData.name}
          </p>
          <p>
            <span className="text-gray-300 italic">
              {t("characterCard.gender")}
            </span>
            {t("characterCard." + props.characterData.gender)}
          </p>
        </div>
        <div className="flex justify-center">
          {props.fromApi && (
            <Button onClick={() => props.selectFilms(props.characterData.id)}>
              {t("characterCard.film")}
            </Button>
          )}
          <Button
            onClick={() =>
              props.deleteCharacter(
                props.fromApi
                  ? props.characterData.name
                  : props.characterData.id,
                props.fromApi
              )
            }
          >
            {t("characterCard.delete")}
          </Button>
        </div>
      </div>
    </>
  );
};

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="text-black font-semibold m-2 px-1 py-1 rounded-lg w-28 bg-orange-300"
    >
      {props.children}
    </button>
  );
};

export default CharacterCard;
