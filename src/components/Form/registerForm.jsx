"use client";

import { useState } from "react";
import Input from "./Input";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const router = useRouter();

  const [register, setRegister] = useState({
    nama  : "",
    email : "",
    hp    : 0,
    gender: "",
    pass  : "",
    rePass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegister((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      nama    : register.nama,
      email   : register.email,
      hp      : register.hp,
      gender  : register.gender,
      pass    : register.pass,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userData}),
      });
      if (res.status === 201) {
        // Handle success
        Swal.fire('Success', 'User Is Successfully Added', 'success')
        router.push("/login");
      } else {
        // Handle error
        Swal.fire('Failed', 'Something Went Wrong', 'error')
      }
    } catch (err) {
      throw new Error(err.message);
    }

  };

  return (
    <>
      <form className="space-y-12 my-5" onSubmit={handleSubmit}>
        <Input
          id={"userNama"}
          label={"Nama"}
          type={"text"}
          name={"nama"}
          required={true}
          value={register.nama}
          onChange={handleChange}
        />
        <Input
          id={"userEmail"}
          label={"Email"}
          type={"email"}
          name={"email"}
          value={register.email}
          required={true}
          onChange={handleChange}
        />
        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <input
              className="peer form-text rounded-2xl border-0 border-b-2 border-black placeholder-transparent bg-white focus:ring-0 focus:border-slate-500 focus:bg-white placeholder-shown:bg-transparent duration-300"
              type={"tel"}
              name={"hp"}
              id={"noUser"}
              required
              value={register.hp}
              onChange={handleChange}
              minLength={10}
              maxLength={13}
              // onInvalid={(e) => e.target.setCustomValidity("Not a Valid Phone Number")}
              placeholder="just there"
            />
            <label
              className="absolute left-2 -top-6 font-semibold peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-6 peer-focus:left-2 transition-all duration-300"
              htmlFor="noUser"
            >
              No. Hp
            </label>
          </div>
          <select
            className="rounded-xl border-2 border-black border-l-0 border-r-0 font-semibold bg-transparent focus:ring-0 focus:bg-white focus:border-black duration-300"
            name={"gender"}
            id={"gender"}
            value={register.gender}
            onChange={handleChange}
            required
          >
            <option value={""} selected hidden>
              Gender
            </option>
            <option className="font-medium" value={"L"}>Laki-Laki</option>
            <option className="font-medium" value={"P"}>Perempuan</option>
          </select>
        </div>
        <Input
          id={"userPassword"}
          label={"Password"}
          type={"password"}
          name={"pass"}
          value={register.pass}
          required={true}
          onChange={handleChange}
        />
        <Input
          id={"confirmPass"}
          label={"Konfirmasi Password"}
          type={"password"}
          name={"rePass"}
          value={register.rePass}
          required={true}
          onChange={handleChange}
        />

        <button
          className="btn-dark-action text-white font-semibold block mx-auto"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
