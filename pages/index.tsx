import { Form, Formik, FormikErrors } from "formik";
import Head from "next/head";
import { typedFormik } from "../utils/typedFormik";

// Set the initial values
const initialValues = {
  name: "",
  social: {
    facebook: "",
    twitter: "",
  },
};

// Create type safe helper components
const { Field, ErrorMessage, useField } = typedFormik({
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
          <Field name='name' />
          <ErrorMessage name='name' />

          <Field name='social.twitter' />

          <ErrorMessage name='social.twitter' />

          <Field name='social.facebook' />
          <ErrorMessage name='social.facebook' />

          <button type='submit'>Submit</button>
          <h2>
            Example of typed <code>useField</code>:
          </h2>
          <MyName />
        </Form>
      </Formik>
    </>
  );
}

function MyName() {
  const [field] = useField({ name: "name" });

  return field.value ? (
    <em>
      Hello {field.value}
      {/* Notice that value is of type string here */}
    </em>
  ) : (
    <>Please enter the name field</>
  );
}
