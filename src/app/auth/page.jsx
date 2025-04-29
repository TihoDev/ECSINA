"use client";
import React, { useState } from "react";
import PhoneLoginForm from "@/components/Login/PhoneLoginForm";
import CodeVerificationForm from "@/components/Login/CodeVerificationForm";

const SignupPage = () => {
  const [step, setStep] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneSubmitSuccess = (enteredPhone) => {
    setPhoneNumber(enteredPhone);
    setStep("code");
  };
  const handleBackToPhoneLogin = () => {
    setStep("phone"); // Go back to the phone login form
  };

  return (
    <div className="flex justify-center items-center h-full flex-col gap-10 ">
      {step === "phone" && <PhoneLoginForm buttonText="ارسال کد" onSuccess={handlePhoneSubmitSuccess} />}
      {step === "code" && <CodeVerificationForm phoneNumber={phoneNumber} onBack={handleBackToPhoneLogin} />}
    </div>
  );
};

export default SignupPage;
