"use client";

import google from "@/public/assets/images/google.png";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignInForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const res = await signIn("google", { callbackUrl: "/" });
      console.log("Response ", res);
    } catch (err) {
      console.error("Login failed:", err);
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-5xl font-bold">Welcome Back</h1>
      <p>Enter your credentials to access your secure dashboard.</p>
      <div className="bg-yellow-50 p-8 rounded-lg shadow-md w-full max-w-md">
        <form className="flex flex-col gap-4 w-full max-w-md">
          <label htmlFor="email">Email</label>
          <input
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            type="email"
            placeholder="you@example.com"
          />
          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
            type="password"
            placeholder="••••••••"
          />
          <p className="flex items-center justify-between">
            <span>
              <input className="form-checkbox" type="checkbox" id="remember" />{" "}
              <label htmlFor="remember">Remember me </label>
            </span>
            <Link className="text-blue-700  pr-6" href="/forgot-password">
              Forgot password?
            </Link>
          </p>
          <button
            className="w-full py-2 px-4 bg-blue-600 font-semibold cursor-pointer text-white rounded-md hover:bg-blue-700 transition-colors"
            type="submit"
          >
            Sign In
          </button>
        </form>

        {/* devider */}
        <div className="relative flex text-gray-400 items-center py-8">
          <div className="grow border-t border-outline-variant"></div>
          <span className="shrink mx-4  text-sm text-outline font-bold uppercase">
            Or continue with
          </span>
          <div className="grow border-t border-outline-variant"></div>
        </div>
        {/* --- */}
        <button
          className="w-full py-2 px-4  font-semibold rounded-md border cursor-pointer  border-gray-600 hover:bg-gray-100 transition-colors"
          type="submit"
          onClick={handleGoogleLogin}
        >
          <Image
            src={google}
            alt="Google"
            width={20}
            height={20}
            className="inline  mr-2"
          />
          {loading ? "Redirecting…" : " Log in with Google"}
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
