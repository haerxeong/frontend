import { useEffect, useState } from "react";

interface FormValues {
  [key: string]: any;
}

interface FormErrors {
  [key: string]: string;
}

interface FormTouched {
  [key: string]: boolean;
}

function useForm<T extends FormValues>(
  initialValues: T,
  validate: (values: T) => FormErrors
) {
  const [values, setValues] = useState<T>(initialValues);
  const [touched, setTouched] = useState<FormTouched>({});
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChangeInput = (name: string, value: any) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (name: string) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTextInputProps = (name: string) => {
    const value = values[name];
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      handleChangeInput(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur };
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [validate, values]);

  return { values, errors, touched, getTextInputProps };
}

export default useForm;
