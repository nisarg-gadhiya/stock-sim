const AuthTabs = ({ mode, setMode }) => {
  return (
    <div className="flex bg-[#0f172a] rounded-lg p-1">

      <button
        onClick={() => setMode("login")}
        className={`w-1/2 py-2 rounded-md text-sm font-medium transition
          ${
            mode === "login"
              ? "bg-[#1D283A] text-white"
              : "text-slate-400 hover:text-white"
          }`}
      >
        Sign In
      </button>

      <button
        onClick={() => setMode("signup")}
        className={`w-1/2 py-2 rounded-md text-sm font-medium transition
          ${
            mode === "signup"
              ? "bg-[#1D283A] text-white"
              : "text-slate-400 hover:text-white"
          }`}
      >
        Sign Up
      </button>

    </div>
  );
};

export default AuthTabs;
