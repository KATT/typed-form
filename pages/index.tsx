import { Form, Formik } from "formik";
import Head from "next/head";
import { typedFormik } from "../utils/useTypedFormik";

const initialValues = {
  name: "hello",
  social: {
    facebook: "",
    twitter: "",
  },
};

const { TypedField } = typedFormik({ initialValues });

export default function Home() {
  const initalValues = {};
  return (
    <>
      <Head>
        <title>Create Next App</title>
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
          <TypedField name='name' />
          <TypedField name='social.facebook' />
          <TypedField name='social.facebook' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
}
