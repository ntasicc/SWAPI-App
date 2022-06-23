import { useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import { swDataActions } from "../../store/swData-slice";
import { Formik, Field, Form } from "formik";
import classes from "./NewCharacter.module.css";

const NewCharacter = (props) => {
  const dispatch = useDispatch();

  const addCharacterHandler = (value) => {
    dispatch(swDataActions.addCustomCharacter({ fromDB: false, ...value }));
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <Formik
        initialValues={{
          name: "",
          height: "",
          mass: "",
          hair_color: "",
          skin_color: "",
          eye_color: "",
          birth_year: "",
          gender: "",
        }}
        onSubmit={(values) => addCharacterHandler(values)}
      >
        <Form className={classes.form}>
          <InputComponent name={"name"} text={"Name"} />
          <InputComponent name={"height"} text={"Height"} />
          <InputComponent name={"mass"} text={"Mass"} />
          <InputComponent name={"hair_color"} text={"Hair Color"} />
          <InputComponent name={"skin_color"} text={"Skin Color"} />
          <InputComponent name={"eye_color"} text={"Eye Color"} />
          <InputComponent name={"birth_year"} text={"Birth Year"} />
          <InputComponent name={"gender"} text={"Gender"} />
          <button className={classes.addBtn} type="submit">
            Add
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

const InputComponent = (props) => {
  return (
    <div className={classes.inputDiv}>
      <label htmlFor={props.name}>{props.text}</label>
      <Field id={props.name} name={props.name} />
    </div>
  );
};

export default NewCharacter;
