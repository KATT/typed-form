import { Form, Formik, FormikErrors } from "formik";
import Head from "next/head";
import { typedFormik } from "../utils/typedFormik";

const initialValues = {
  name: "hello",
  social: {
    facebook: "",
    twitter: "",
  },
};

const { Field, ErrorMessage, Label } = typedFormik({
  initialValues,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Typed fields</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<typeof values> = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (
            values.social.twitter &&
            !/^[a-zA-Z0-9_]{1,15}/.test(values.social.twitter)
          ) {
            errors.social ??= {};
            errors.social.twitter = "Not a valid twitter handle";
          }
          return errors;
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        <Form>
          <p>
            <Label for='name'>name:</Label>
            <Field name='name' />
            <ErrorMessage name='name' />
          </p>
          <p>
            <Label for='social.twitter'>twitter:</Label>
            <Field name='social.twitter' />
            <ErrorMessage name='social.twitter' />
          </p>
          <p>
            <Label for='social.facebook'>facebook:</Label>
            <Field name='social.facebook' />
            <ErrorMessage name='social.facebook' />
          </p>

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
}
