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
      <Input placeholder="نام کاربری" className="bg-white block border w-full border-[#D2D2D2] rounded-lg placeholder:text-[#8C9197] text-black py-3 px-2.5 font-normal text-sm focus:outline-0" register={register} name="username" rules={{ required: "نام کاربری الزامی است" }} errors={errors} />
      <InputPassword register={register} errors={errors} />
    </AuthForm>
  );
}
