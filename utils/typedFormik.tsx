import { Field } from "formik";
import { LeafPath, Path } from "./types";

type FieldProps = React.ComponentProps<typeof Field>;
type TypedFieldProps<TValues, TPath extends LeafPath<TValues>> = Omit<
  FieldProps,
  "name"
> & {
  name: TPath;
};

export function typedFormik<TValues>({}: { initialValues: TValues }) {
  return {
    TypedField<TPath extends LeafPath<TValues>(
      props: TypedFieldProps<TValues, TPath>,
    ) {
      return <Field {...props} />;
    },
  };
}
