import { useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import { swDataActions } from "../../store/swData-slice";
import { Formik, Field, Form } from "formik";
import classes from "./NewCharacter.module.css";
import ValidationSchema from "./schema";
import { useTranslation } from "react-i18next";

const NewCharacter = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
        validationSchema={ValidationSchema}
        onSubmit={(values) => addCharacterHandler(values)}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <InputComponent
              name={"name"}
              text={t("characterCard.name").replace(":", "")}
              errors={errors.name}
              touched={touched.name}
            />
            <InputComponent
              name={"height"}
              text={t("characterInfo.height").replace(":", "")}
              errors={errors.height}
              touched={touched.height}
            />
            <InputComponent
              name={"mass"}
              text={t("characterInfo.mass").replace(":", "")}
              errors={errors.mass}
              touched={touched.mass}
            />
            <InputComponent
              name={"hair_color"}
              text={t("characterInfo.hairColor").replace(":", "")}
              errors={errors.hair_color}
              touched={touched.hair_color}
            />
            <InputComponent
              name={"skin_color"}
              text={t("characterInfo.skinColor").replace(":", "")}
              errors={errors.skin_color}
              touched={touched.skin_color}
            />
            <InputComponent
              name={"eye_color"}
              text={t("characterInfo.eyeColor").replace(":", "")}
              errors={errors.eye_color}
              touched={touched.eye_color}
            />
            <InputComponent
              name={"birth_year"}
              text={t("characterInfo.birthYear").replace(":", "")}
              errors={errors.birth_year}
              touched={touched.birth_year}
            />
            <InputComponent
              name={"gender"}
              text={t("characterCard.gender").replace(":", "")}
              errors={errors.gender}
              touched={touched.gender}
            />

            <button className={classes.addBtn} type="submit">
              {t("addBtn")}
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

const InputComponent = (props) => {
  return (
    <div className={classes.inputDiv}>
      <label htmlFor={props.name}>
        {props.text}{" "}
        {props.touched && props.errors && (
          <span className="text-red-700 text-sm"> ({props.errors})</span>
        )}
      </label>
      <Field id={props.name} name={props.name} />
    </div>
  );
};

export default NewCharacter;
