import { ErrorMessage, Field } from "formik";
import { LeafPath, Path } from "./types";

type FieldProps = React.ComponentProps<typeof Field>;
type TypedFieldProps<TValues, TPath extends LeafPath<TValues>> = Omit<
  FieldProps,
  "name"
> & {
  name: TPath;
};

type ErrorMessageProps = React.ComponentProps<typeof ErrorMessage>;
type TypedErrorMessageProps<TValues, TPath extends LeafPath<TValues>> = Omit<
  ErrorMessageProps,
  "name"
> & {
  name: TPath;
};

export function typedFormik<TValues>({}: { initialValues: TValues }) {
  return {
    Field: function TypedField<TPath extends LeafPath<TValues>>(
      props: TypedFieldProps<TValues, TPath>,
    ) {
      return <Field {...props} />;
    },
    ErrorMessage: function TypedErrorMessage<TPath extends LeafPath<TValues>>(
      props: TypedErrorMessageProps<TValues, TPath>,
    ) {
      return <Field {...props} />;
    },
  };
}
