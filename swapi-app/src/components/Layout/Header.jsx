import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = (props) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newFilter = { ...props.filter, [name]: value };
    props.setFilter(newFilter);
  };

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <header className="flex h-20 w-full justify-between max-w-full shadow-xl shadow-black bg-neutral-900">
        <div className="text-center h-full ">
          <h1
            className="text-white  text-2xl sm:text-2xl mt-6 md:text-3xl lg:text-4xl md:mt-5 font-medium hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            🌌 Star Wars
          </h1>
        </div>
        <div className="my-auto flex xl:flex-row flex-col h-14 lg:w-auto w-32 xl:mt-6 lg:-mr-12 ">
          <input
            className=" bg-gray-200 rounded-xl text-center h-8 border-amber-500 border-solid border-4 xl:mb-0 mb-2"
            name="name"
            onChange={onChangeHandler}
            placeholder={t("header.namePlaceholder")}
          />
          <input
            className="bg-gray-200 rounded-xl text-center h-8 border-amber-500 border-solid border-4"
            name="gender"
            onChange={onChangeHandler}
            placeholder={t("header.genderPlaceholder")}
          />
        </div>
        <div className="h-full mr-0 lg:mr-24">
          <button
            type="button"
            className="bg-yellow-400 px-3 py-1 mt-7 sm:mt-7 md:px-8 md:py-2 rounded-3xl md:mt-6 hover:bg-yellow-500 hover:py-3 hover:mt-5 font-semibold sm:text-md text-xs lg:text-base xl:mt-5 hover:xl:mt-4 text"
            onClick={() => props.openAddCharacter()}
          >
            {t("header.buttonText")}
          </button>
          <div className="fixed right-0 bottom-0">
            <button
              className="mr-3 text-amber-500 text-2xl"
              onClick={changeLanguage}
              value="en"
            >
              EN
            </button>
            <button
              className="mr-3 text-amber-500 text-2xl"
              onClick={changeLanguage}
              value="fr"
            >
              FR
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
