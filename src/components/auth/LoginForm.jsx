import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;