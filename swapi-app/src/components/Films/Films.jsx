import Modal from "../UI/Modal";
import { useSelector } from "react-redux";

const Films = (props) => {
  const filmsData = useSelector((state) => state.filmsData.filmsArray);
  return (
    <Modal onClose={props.onClose}>
      {filmsData.map((film, i) => {
        return <p key={i}>{film.title}</p>;
      })}
    </Modal>
  );
};

export default Films;
