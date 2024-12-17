import React from "react";
import * as S from "./input.style.ts";

interface InputProps {
  type: string;
  placeholder: string;
  error?: {
    message: string;
  };
  register: any;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  error,
  register,
}) => (
  <>
    <S.Input
      type={type}
      placeholder={placeholder}
      {...register}
      error={!!error}
    />
    {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
  </>
);

export default Input;
