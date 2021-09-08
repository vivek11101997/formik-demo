import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import React from "react";
import * as Yup from "yup";

const YoutubeFrom = () => {
  const initialValues = { name: "", email: "", channel: "", phNumbers: [""] };
  const onSubmit = (values) => {};
  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.name) {
  //     errors.name = "name is required";
  //   }

  //   if (!values.email) {
  //     errors.email = "email is required";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Invalid email format";
  //   }

  //   if (!values.channel) {
  //     errors.channel = "channel is required";
  //   }

  //   return errors;
  // }
  var validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("invalid Email Format").required("Required"),
    channel: Yup.string().required("Required"),
  });

  //console.log(formik.touched);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
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

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeFrom;
