"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const inputesField = [
    { name: "نام و نام خانوادگی", type: "text", title: "", required: false },
    { name: "شماره تماس", type: "text", title: "", required: false },
    { name: "ایمیل", type: "text", title: "", required: false },
    { name: "رمز عبور", type: "text", title: "", required: false },
  ];
  const selectBoxFields = [
    { name: "نوع کسب کار", type: "text", title: "", options: [] },
    { name: "سمت شغلی", type: "text", title: "", options: [] },
    { name: "حوزه فعالیت :", type: "text", title: "", options: [] },
    { name: "چطور با ما آشنا شدید؟", type: "text", title: "", options: [] },
  ];

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-full flex flex-col justify-center items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center"></div>
      <Button className="p-4  col-span-1 text-2xl  self-center">ثبت نام</Button>
    </form>
  );
}

const CustomInput = ({ name, id, type, title, ...props }) => {
  return (
    <div className="fexl flex-col items-start gap-1">
      <label>{name}</label>
      <input type={type} required />
    </div>
  );
};

const CustomSelextBox = ({}) => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <ListboxButton>{selectedPerson.name}</ListboxButton>
      <ListboxOptions anchor="bottom">
        {options.map((option) => (
          <ListboxOption key={option.id} value={option} className="data-focus:bg-blue-100">
            {option.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default SignupForm;
