import React from "react";
import { Form, Field, withFormik } from "formik";
import * as yup from "yup";

const LoginWrapper = Login;

const LoginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(12)
    .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
    .required(),
});

export default withFormik(
  {
    handleSubmit: (values, { setSubmitting }) => {
      console.log("Submitted Email :", values.email);
      console.log("Submitted Password : ", values.password);
      setTimeout(() => setSubmitting(false), 3 * 1000);
    },
    validationSchema: LoginValidation,
  }(LoginWrapper)
);

return (
  <Form>
    <Field type="text" name="email" placeholder="email" />
    <ErrorMessage name="email" />
    <Field type="text" name="password" placeholder="password" />
    <ErrorMessage name="password" />
    <button type="submit"> Submit </button>
  </Form>
);
