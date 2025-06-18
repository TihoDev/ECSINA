"use client";
import React from "react";
import { useForm } from "react-hook-form";

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const inputesFueild = [{ name: "", type: "" }];

  return <form></form>;
}

const CustomInput = ({ name, id }) => {
  return (
    <div>
      <label>{name}</label>
      <input type="type" />
    </div>
  );
};

export default SignupForm;
