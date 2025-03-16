"use client";
import React from "react";
import { useForm } from "react-hook-form";
import AuthForm from "@/components/authForm/AuthForm";
import Input from "@/components/UI/Input";
import InputPassword from "@/components/authForm/InputPassword";

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
      <Input placeholder="نام کاربری" register={register} name="username" rules={{ required: "نام کاربری الزامی است" }} errors={errors} />
      <InputPassword register={register} errors={errors} />
    </AuthForm>
  );
}
