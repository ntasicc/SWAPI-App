import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Pagination from "./components/Pagination/Pagination";
let initialRender = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialRender) {
      initialRender = false;
      dispatch({
        type: "FETCH_SWDATA",
        payload: "https://swapi.dev/api/people",
      });
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Pagination></Pagination>
    </div>
  );
}

export default App;
