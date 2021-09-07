import { useFormik } from "formik";
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
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />

        {formik.errors.name && formik.touched.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}

        <label htmlFor="name">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        {formik.errors.email && formik.touched.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="name">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        {formik.errors.channel && formik.touched.channel ? (
          <div className="error">{formik.errors.channel}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeFrom;
