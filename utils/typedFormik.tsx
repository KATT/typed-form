import { ErrorMessage, Field } from "formik";
import { HTMLAttributes } from "react";
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

type HTMLLabelProps = HTMLAttributes<HTMLLabelElement>;
type TypedLabelProps<TValues, TPath extends LeafPath<TValues>> = Omit<
  HTMLLabelProps,
  "htmlFor"
> & {
  for: TPath;
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
      return <ErrorMessage {...props} />;
    },
    Label: function TypedLabel<TPath extends LeafPath<TValues>>(
      props: TypedLabelProps<TValues, TPath>,
    ) {
      const { for: htmlFor, ...rest } = props;

      return <label {...rest} htmlFor={htmlFor} />;
    },
  };
}
