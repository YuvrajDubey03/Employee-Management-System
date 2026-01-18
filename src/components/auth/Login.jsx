import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#0b0f10] px-4">
      {/* Card */}
      <div className="w-150 rounded-3xl border-2 border-emerald-500/80 bg-[#0f1416] px-14 py-16 shadow-[0_0_45px_rgba(16,185,129,0.18)]">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-white tracking-wide">
            Welcome Back
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Login to continue
          </p>
        </div>

        <form onSubmit={submitHandler} className="flex flex-col gap-6">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300 font-medium">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter Your Email"
              className="w-full border-2 border-emerald-600/70 bg-transparent py-4 px-6 text-lg text-white placeholder:text-gray-500 rounded-full outline-none transition focus:border-emerald-400 focus:shadow-[0_0_18px_rgba(16,185,129,0.25)]"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300 font-medium">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Enter Your Password"
              className="w-full border-2 border-emerald-600/70 bg-transparent py-4 px-6 text-lg text-white placeholder:text-gray-500 rounded-full outline-none transition focus:border-emerald-400 focus:shadow-[0_0_18px_rgba(16,185,129,0.25)]"
            />
          </div>

          {/* Button */}
          <button className="mt-4 w-full py-4 text-lg font-semibold text-white rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-[0.99] transition shadow-[0_12px_25px_rgba(16,185,129,0.22)]">
            Log In
          </button>

          {/* small footer */}
          <p className="text-center text-gray-500 text-sm mt-2">
            By logging in you agree to our terms & policy
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
