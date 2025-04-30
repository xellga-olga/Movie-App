import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Confirm Password" type="password" />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;