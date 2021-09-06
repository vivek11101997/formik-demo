import { useFormik } from "formik";
import React from "react";

const YoutubeFrom = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      //console.log(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "name is required";
      }

      if (!values.email) {
        errors.email = "email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email format";
      }

      if (!values.channel) {
        errors.channel = "channel is required";
      }

      return errors;
    },
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
