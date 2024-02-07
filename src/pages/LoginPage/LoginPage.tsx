import React, { useEffect } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../components/UI/Input/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button/Button";
import { StyleLoginPage } from "./LoginPage.style";
import { Container } from "../../components/UI/Container/Container.style";
import { Heading } from "../../components/Typograohy/Heading";
import { StyledLink } from "../../components/Typograohy/StyledLink";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().email().required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержат 4 символов")
    .required("Обязательное поле!"),
});

export const LoginPage = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("loginFormData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setValue("useremail", parsedData.useremail);
      setValue("userpassword", parsedData.userpassword);
    }
  }, [setValue]);

  const goToNextPage = () => {
    if (Object.keys(errors).length === 0) {
      const formData = getValues(["useremail", "userpassword"]);
      localStorage.setItem("loginFormData", JSON.stringify(formData));

      console.log("Form Data:", formData);

      navigate("/main");
    }
  };

  return (
    <Container>
      <StyleLoginPage>
        <Heading headingText="Авторизация" />
        <form
          onSubmit={handleSubmit((data) => {
            console.table(data);
            goToNextPage();
          })}
        >
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.useremail ? true : false}
                errorMessage={errors.useremail?.message}
                type="email"
                placeholder="Почта"
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userpassword ? true : false}
                errorMessage={errors.userpassword?.message}
                type="password"
                placeholder="Пароль"
                {...field}
              />
            )}
          />
          <Button
            isPrimary
            disabled={!!Object.keys(errors).length}
            type="submit"
            buttonText="Войти"
          />
        </form>
        <StyledLink to="/register" linkText="Забыли пароль?" />
        <RegistrationInfo
          question="У вас нет аккаунта?"
          linkLabel="Зарегистрироваться"
          linkURL="/register"
        />
      </StyleLoginPage>
    </Container>
  );
};
