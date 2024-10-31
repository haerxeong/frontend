import React from "react";
import * as S from "./login.style";
import useForm from "../../hooks/useForm";
import { validateLogin } from "../../utils/validate";

const Login = () => {
  const login = useForm(
    {
      email: "",
      password: "",
    },
    validateLogin
  );

  const handlePressLogin = () => {
    console.log(login.values.email, login.values.password);
  };

  return (
    <S.LoginContainer>
      <h1>로그인</h1>
      <S.Input
        error={login.touched.email && login.errors.email}
        type={"email"}
        placeholder={"이메일을 입력해주세요."}
        {...login.getTextInputProps("email")}
      />
      {login.touched.email && login.errors.email && (
        <S.ErrorMessage>{login.errors.email}</S.ErrorMessage>
      )}
      <S.Input
        error={login.touched.password && login.errors.password}
        type={"password"}
        placeholder={"비밀번호를 입력해주세요."}
        {...login.getTextInputProps("password")}
      />
      {login.touched.password && login.errors.password && (
        <S.ErrorMessage>{login.errors.password}</S.ErrorMessage>
      )}
      <S.SubmitButton
        onClick={handlePressLogin}
        isValid={!login.errors.email && !login.errors.password}
      >
        로그인
      </S.SubmitButton>
    </S.LoginContainer>
  );
};

export default Login;
