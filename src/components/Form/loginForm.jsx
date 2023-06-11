'use client'

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Input from "./Input";
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [formInput, setFormInput] = useState({
    email : "",
    password : ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput(prev => {
      return {
        ...prev,
        [name] : value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/auth/login", {
        method: 'POST',
        headers: {
          "content-type" : "aplication/json"
        },
        body : JSON.stringify({
          email,
          password
        })
      })
    } catch (err) {
      throw new Error(err.message)
    }
  }

  return (
    <>
      
      <form className="space-y-5 my-5" onSubmit={handleSubmit}>
      <div className="space-y-10">
        <Input
          id={"userEmail"}
          label={"Email"}
          type={"email"}
          name={"email"}
          value={formInput.email}
          onChange={handleChange}
        />
        <Input
          id={"userPassword"}
          label={"Password"}
          type={"password"}
          name={"password"}
          value={formInput.password}
          onChange={handleChange}
        />
      </div>
        <p className="text-center">
          <small>
            jika anda belum punya akun, silahkan{" "}
            <Link
              href={"/registrasi"}
              className="text-rose-500 font-semibold hover:text-rose-700 hover:underline cursor-pointer"
            >
              Registrasi
            </Link>
          </small>
        </p>
        <button
          className="btn-dark-action text-white font-semibold block mx-auto"
          type="submit"
        >
          Login
        </button>
        <hr width="80%" className="border border-slate-400 mx-auto my-5" />

        {/* login with providers */}
        <div className="flex justify-center">
        <button onClick={() => signIn("google")} className="btn-provider flex items-center justify-center gap-3 px-16">
          <span className="text-xl">
            <FcGoogle />
          </span>
          Lanjutkan dengan Google
        </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
