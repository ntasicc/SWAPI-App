import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newFilter = { ...props.filter, [name]: value };
    props.setFilter(newFilter);
  };
  return (
    <>
      <header className="flex h-20 w-full justify-between max-w-full shadow-xl shadow-black bg-neutral-900">
        <div className="text-center h-full ml-0 lg:ml-24">
          <h1
            className="text-white  text-2xl sm:text-4xl mt-5 md:text-5xl md:mt-4 font-medium hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            🌌 Star Wars
          </h1>
        </div>
        <div className="my-auto mr-32">
          <input
            className="mr-10 bg-gray-200 rounded-xl text-center h-8 border-amber-500 border-solid border-4"
            name="name"
            onChange={onChangeHandler}
            placeholder="Enter name..."
          />
          <input
            className="bg-gray-200 rounded-xl text-center h-8 border-amber-500 border-solid border-4"
            name="gender"
            onChange={onChangeHandler}
            placeholder="Enter gender..."
          />
        </div>
        <div className="h-full mr-0 lg:mr-24">
          <button
            type="button"
            className="bg-yellow-400 px-3 py-1 mt-7 sm:mt-7 md:px-8 md:py-2 rounded-3xl md:mt-6 hover:bg-yellow-500 hover:py-3 hover:mt-5 font-semibold sm:text-md text-xs lg:text-base xl:mt-5 hover:xl:mt-4 text"
            onClick={() => props.openAddCharacter()}
          >
            Add Character
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
