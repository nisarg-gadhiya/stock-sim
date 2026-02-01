import React, { useState } from "react";
import { HiTrendingUp } from "react-icons/hi";
import AuthTabs from "../components/auth/AuthTabs";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignUpForm";

const Auth = () => {
  const [mode, setMode] = useState("login");

  return (
    <div
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        bg-linear-to-br
        from-[#020617]
        via-[#020617]
        to-[#020617]
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative z-10 w-full max-w-md">

        <div className="flex items-center justify-center gap-2 text-2xl font-bold mb-6">
          <HiTrendingUp className="text-blue-500 text-4xl" />
          <span>StockSim</span>
        </div>

        <div className="bg-[#1D283A]/90 backdrop-blur border border-slate-700 rounded-xl p-6 shadow-xl">

          <AuthTabs mode={mode} setMode={setMode} />

          <div className="mt-6">
            {mode === "login" ? <LoginForm /> : <SignupForm />}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Auth;
