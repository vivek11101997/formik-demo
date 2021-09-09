import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import React from "react";
import * as Yup from "yup";
import { useState } from "react";

const YoutubeFrom = () => {
  const [formvalue, setformValue] = useState(null);
  const initialValues = { name: "", email: "", channel: "", phNumbers: [""] };
  const saveValue = {
    name: "vivek",
    email: "v@gmail.com",
    channel: "",
    phNumbers: [""],
  };
  const onSubmit = (values) => {};

  var validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("invalid Email Format").required("Required"),
    channel: Yup.string().required("Required"),
  });

  //console.log(formik.touched);
  return (
    <Formik
      initialValues={formvalue || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
      enableReinitialize
    >
      {(formik) => {
        //console.log(formik);
        return (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />

            <label htmlFor="name">E-mail</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" />

            <label htmlFor="name">Channel</label>
            <Field type="text" id="channel" name="channel" />
            <ErrorMessage name="channel" />

            <div>
              <label>List of Phone number</label>
              <FieldArray name="phNumbers">
                {(FieldArrayProps) => {
                  const { push, remove, form } = FieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  // {
                  //   !phNumbers && <div className="loading">Loading...</div>;
                  // }
                  return (
                    <div>
                      {phNumbers.map((_, index) => (
                        <div key={index}>
                          <Field type="text" name={`phNumbers[${index}]`} />
                          <button type="button" onClick={() => remove(index)}>
                            -
                          </button>
                          <button type="button" onClick={() => push(" ")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            <button type="button" onClick={() => setformValue(saveValue)}>
              Load Saved Data
            </button>

            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeFrom;
