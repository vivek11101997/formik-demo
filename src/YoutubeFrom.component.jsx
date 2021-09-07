import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const YoutubeFrom = () => {
  const initialValues = { name: "", email: "", channel: "" };
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
    address: Yup.string().required("Required"),
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

        <label htmlFor="name">Address</label>
        <Field name="address">
          {(props) => {
            const { field, form, meta } = props;
            console.log(props);
            return (
              <div>
                <input type="text" id="address" {...field} />
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            );
          }}
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeFrom;
