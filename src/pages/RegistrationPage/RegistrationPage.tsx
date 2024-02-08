import React, { useEffect, useState } from "react";
import { Button } from "../../components/UI/Button/Button";
import { StyledRegistrationPage } from "./RegistrationPage.style";
import { Heading } from "../../components/Typograohy/Heading";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";


const regexUZB = /^(?:\998)?(?:\d{2})?(?:\d{7})$/;

const registrationFormSchema = yup.object({
  username: yup.string().required("Обязательное поле!"),
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
  useremail: yup.string().email().required("Обязательное поле!"),
});

interface IRegistrationForm {
  username: string;
  userphone: string;
  userpassword: string;
  useremail: string;
}

export const RegistrationPage: React.FC = () => {
  const {
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      userphone: "",
      userpassword: "",
      useremail: "",
    },
  });

  // console.warn("ERRORS: ", errors);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("registrationFormData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setValue("username", parsedData.username);
      setValue("userphone", parsedData.userphone);
      setValue("useremail", parsedData.useremail);
      setValue("userpassword", parsedData.userpassword);
    }
  }, [setValue]);

  const goToNextPage = () => {
    if (Object.keys(errors).length === 0) {
      const formData = getValues([
        "username",
        "userphone",
        "useremail",
        "userpassword",
      ]);
      localStorage.setItem("registrationFormData", JSON.stringify(formData));
    

      console.log("Form Data:", formData);

      navigate("/LoginPage");
    }
  };

  return (
    <Container>
      <StyledRegistrationPage>
        <Heading headingText="Регистрация" />
        <form
          onSubmit={handleSubmit((data) => {
            console.table(data);
            goToNextPage();
          })}
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.username ? true : false}
                errorMessage={errors.username?.message}
                type="text"
                placeholder="Имя и фамилия"
                {...field}
              />
            )}
          />
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
            name="userphone"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userphone ? true : false}
                errorMessage={errors.userphone?.message}
                type="tel"
                placeholder="Номер телефона"
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
            buttonText="Зарегистрироваться"
          />
        </form>
        <RegistrationInfo
          question="Уже есть аккаунт?"
          linkURL="/LoginPage"
          linkLabel="Войти"
        />
      </StyledRegistrationPage>
    </Container>
  );
};
