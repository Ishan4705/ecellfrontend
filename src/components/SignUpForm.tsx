"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function SignUpForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert("Sign up successful!");
  };

  return (
    <div className="rounded-[2.5rem] bg-[#071a36]/90 p-10 w-full max-w-md mx-auto shadow-shadow-[0_8px_40px_0_rgba(0,0,0,0.45)] flex flex-col items-center">
      <h2 className="text-white text-4xl font-extrabold mb-2 text-center">
        Sign up
      </h2>
      <p className="text-white/80 text-base mb-6 text-center">
        Already Have an account?{" "}
        <span
          className="text-cyan-400 font-semibold cursor-pointer"
          onClick={() => window.location.href = "/signin"}
        >
          Sign in
        </span>{" "}
        Here
      </p>
      <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Enter KIIT Email Id"
            className="w-full rounded-xl bg-gray-200 px-6 py-4 text-lg outline-none pr-12"
            value={form.email}
            onChange={handleChange}
            required
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75"
              />
            </svg>
          </span>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            className="w-full rounded-xl bg-gray-200 px-6 py-4 text-lg outline-none pr-12"
            value={form.password}
            onChange={handleChange}
            required
          />
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full rounded-xl bg-gray-200 px-6 py-4 text-lg outline-none pr-12"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <span
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-extrabold text-lg shadow-md mt-2"
        >
          Sign Up
        </button>
      </form>
      <div className="flex items-center w-full my-6">
        <div className="flex-1 h-px bg-white/30" />
        <span className="mx-4 text-white/60">or</span>
        <div className="flex-1 h-px bg-white/30" />
      </div>
      <div className="flex gap-6 w-full justify-center">
        <button className="bg-white rounded-full p-3 flex items-center justify-center shadow-md">
          <FaGoogle className="text-2xl text-[#EA4335]" />
        </button>
        <button className="bg-white rounded-full p-3 flex items-center justify-center shadow-md">
          <FaInstagram className="text-2xl text-[#E4405F]" />
        </button>
        <button className="bg-white rounded-full p-3 flex items-center justify-center shadow-md">
          <FaFacebookF className="text-2xl text-[#1877F3]" />
        </button>
      </div>
    </div>
  );
}
