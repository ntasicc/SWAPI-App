import Modal from "../UI/Modal";
import { useSelector } from "react-redux";

const Films = (props) => {
  const filmsData = useSelector((state) => state.filmsData.filmsArray);
  return (
    <Modal onClose={props.onClose}>
      <div className="text-center">
        <h1 className=" font-serif text-amber-500 mt-2 mb-4 text-3xl">
          - Film List -
        </h1>
        {filmsData.map((film, i) => {
          return (
            <p key={i} className="mb-2 font-serif">
              <span className="text-gray-600 font-semibold italic mr-3">
                {i + 1}:{" "}
              </span>
              {film.title}
            </p>
          );
        })}
      </div>
    </Modal>
  );
};

export default Films;
