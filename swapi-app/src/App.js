import { Suspense, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Pagination from "./components/Pagination/Pagination";
import Films from "./components/Films/Films";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import CharacterInfo from "./components/Character/CharacterInfo";
import NewCharacter from "./components/NewCharacter/NewCharacter";
import Header from "./components/Layout/Header";
let initialRender = true;

function App() {
  const dispatch = useDispatch();
  const [showFilmsModal, setShowFilmsModal] = useState(false);
  const [showAddCharacterModal, setShowAddCharacterModal] = useState(false);

  useEffect(() => {
    if (initialRender) {
      initialRender = false;
      dispatch({
        type: "FETCH_SWDATA",
        payload: "https://swapi.dev/api/people",
      });
    }
  }, [dispatch]);

  const closeFilmsModalHandler = () => {
    setShowFilmsModal(false);
    dispatch({
      type: "STOP_FETCHING_FILMS",
    });
  };

  const openFilmsModuleHandler = () => {
    setShowFilmsModal(true);
  };

  const openAddCharacterModalHandler = () => {
    setShowAddCharacterModal(true);
  };

  const closeAddCharacterModalHandler = () => {
    setShowAddCharacterModal(false);
  };

  return (
    <>
      {showAddCharacterModal && (
        <NewCharacter onClose={closeAddCharacterModalHandler}></NewCharacter>
      )}
      {showFilmsModal && <Films onClose={closeFilmsModalHandler}></Films>}
      <Header openAddCharacter={openAddCharacterModalHandler}></Header>
      <main>
        <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Pagination openModal={openFilmsModuleHandler}></Pagination>
              }
            ></Route>
            <Route
              path="/character"
              exact
              element={<CharacterInfo></CharacterInfo>}
            ></Route>
            <Route
              path="/add"
              exact
              element={<NewCharacter></NewCharacter>}
            ></Route>
            <Route path="*" exact element={<Navigate to="/meals" />}></Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
