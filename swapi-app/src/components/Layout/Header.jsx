const Header = (props) => {
  return (
    <>
      <header className="flex h-20 w-full justify-between max-w-full shadow-xl shadow-black bg-neutral-900">
        <div className="text-center h-full ml-0 lg:ml-24">
          <h1 className="text-white text-4xl mt-5 md:text-5xl md:mt-4 font-medium">
            Star Wars 🌌
          </h1>
        </div>
        <div className="h-full mr-0 lg:mr-24">
          <button
            type="button"
            className="bg-yellow-400 px-3 py-1 mt-6 md:px-8 md:py-2 rounded-3xl md:mt-5 hover:bg-yellow-500 hover:py-3 hover:mt-4 font-semibold"
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