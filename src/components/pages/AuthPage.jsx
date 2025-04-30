import React from "react";
import LoginForm from "../auth/LoginForm.jsx";
import RegisterForm from "../auth/RegisterForm.jsx";
import {Tabs} from "../ui/Tabs.jsx";



const AuthPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Tabs
          tabs={[
            { label: "Login", content: <LoginForm /> },
            { label: "Register", content: <RegisterForm /> },
          ]}
        />
      </div>
    </div>
  );
};

export default AuthPage;