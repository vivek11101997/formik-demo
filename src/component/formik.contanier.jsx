import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { values } from "lodash";

function FormikContanier() {
  const initialValues = {};
  const validationSchema = Yup.object({});
  onsubmit = (values) => console.log("Form data" + values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onsubmit}
    >
      {(formik) => (
        <Form>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContanier;
