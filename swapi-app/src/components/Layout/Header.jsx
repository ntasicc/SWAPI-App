import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Star Wars 🌌</h1>
        <div className={classes.buttons}>
          <button onClick={() => props.openAddCharacter()}>
            Add New Character
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
