interface FormErrors {
  [key: string]: string;
}

interface UserValues {
  email: string;
  password: string;
}

function validateLogin(values: UserValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.email) {
    errors.email = "이메일을 반드시 입력해주세요.";
  } else if (
    !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(values.email)
  ) {
    errors.email = "유효한 이메일 형식이 아닙니다.";
  }

  if (!values.password) {
    errors.password = "비밀번호를 반드시 입력해주세요.";
  } else if (values.password.length < 8) {
    errors.password = "비밀번호는 8자 이상이어야 합니다.";
  }

  return errors;
}

export { validateLogin };
