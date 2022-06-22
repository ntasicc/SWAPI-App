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
          <div className={classes.inputDiv}>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" />
          </div>

          <div className={classes.inputDiv}>
            <label htmlFor="height">Height</label>
            <Field id="height" name="height" />
          </div>

          <div className={classes.inputDiv}>
            <label htmlFor="mass">Mass</label>
            <Field id="mass" name="mass" />
          </div>

          <div className={classes.inputDiv}>
            <label htmlFor="hair_color">Hair color</label>
            <Field id="hair_color" name="hair_color" />
          </div>

          <div className={classes.inputDiv}>
            <label htmlFor="skin_color">Skin color</label>
            <Field id="skin_color" name="skin_color" />
          </div>

          <div className={classes.inputDiv}>
            <label htmlFor="eye_color">Eye color</label>
            <Field id="eye_color" name="eye_color" />
          </div>

          <div className={classes.inputDiv}>
            <label htmlFor="birth_year">Birth year</label>
            <Field id="birth_year" name="birth_year" />
          </div>

          <div className={classes.inputDiv}>
            <label htmlFor="gender">Gender</label>
            <Field id="gender" name="gender" />
          </div>

          <button className={classes.addBtn} type="submit">
            Add
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default NewCharacter;
