import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={label}>{label}</label>
      <Field id="name" name={name} {...rest}></Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
