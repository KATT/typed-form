import { Form, Formik } from "formik";
import Head from "next/head";
import { typedFormik } from "../utils/typedFormik";

const initialValues = {
  name: "hello",
  social: {
    facebook: "",
    twitter: "",
  },
};

const { Field, ErrorMessage } = typedFormik({
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
        initialValues={{
          social: {
            facebook: "",
            twitter: "",
          },
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        <Form>
          <Field name='name' />
          <ErrorMessage name='name' />

          <Field name='social.twitter' />
          <ErrorMessage name='social.twitter' />

          <Field name='social.facebook' />
          <ErrorMessage name='social.facebook' />

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
}
