"use client";
import React from "react";
import { useForm } from "react-hook-form";
import AuthForm from "@/components/Form/AuthForm";
import Input from "@/components/Form/Input";
import ErrorMessage from "@/components/Form/ErrorMessage";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("فرم ارسال شد:", data);
  };

  return (
    <AuthForm title="ورود به حساب" onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="نام کاربری" register={register("username", { required: "نام کاربری الزامی است" })} name="username" errors={errors.username} />
      {errors.username && <ErrorMessage message={errors?.username.message} />}
      <Input
        type="password"
        register={register("password", { required: "رمز عبور الزامی است", minLength: { value: 8, message: "رمز عبور باید حداقل ۸ کاراکتر باشد" } })}
        name={"password"}
        errors={errors.password}
      />
      {errors.password && <ErrorMessage message={errors?.password.message} />}
    </AuthForm>
  );
}
