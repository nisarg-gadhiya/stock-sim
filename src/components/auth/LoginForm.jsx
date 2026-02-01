const LoginForm = () => {
  return (
    <div className="flex flex-col gap-4">

      <div>
        <label className="text-sm text-slate-300">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="mt-1 w-full h-11 px-4 rounded-lg bg-[#0f172a] border border-slate-700 text-white outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="text-sm text-slate-300">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="mt-1 w-full h-11 px-4 rounded-lg bg-[#0f172a] border border-slate-700 text-white outline-none focus:border-blue-500"
        />
      </div>

      <button className="mt-2 h-11 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold">
        Sign In
      </button>

    </div>
  );
};

export default LoginForm;
