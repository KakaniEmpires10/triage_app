'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsPersonFillAdd } from "react-icons/bs";
import Swal from "sweetalert2";

const ModalCreateUser = ({ onNext }) => {
  const router = useRouter()

  const [data, setData] = useState({
    nama    : "",
    email   : "",
    tel     : 0,
    gender  : "",
    role    : "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      nama    : data.nama,
      email   : data.email,
      tel     : data.tel,
      gender  : data.gender,
      role    : data.role,
      password: data.password,
    }

    try {
      const res = await fetch("/api/user", {
        method : 'POST',
        headers : {
          'Content-Type' : 'aplication/json'
        },
        body : JSON.stringify({ userData })
      })
      if (res.status === 201) {
        Swal.fire('ok', 'User is Successfully Added', 'success')
        router.push('/dashboard/user');
      }
    } catch (err) {
      Swal.fire('Oops', 'Something Went Wrong', 'error')
      console.log(err.message);
    }

  };

  return (
    <form
      className="space-y-5"
      style={{ marginTop: "2.5em" }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="nama">Nama Lengkap</label>
        <input
          className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
          type="text"
          name="nama"
          id="nama"
          onChange={handleChange}
          placeholder="Bambang..."
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="fafa@yaho.com"
          required
        />
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-1">
          <label htmlFor="gender">gender</label>
          <select
            name="gender"
            id="gender"
            className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
            onChange={handleChange}
            required
          >
            <option value={""} selected hidden>
              Gender
            </option>
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </select>
        </div>
        <div className="col-span-1">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
            onChange={handleChange}
            required
          >
            <option value={""} selected hidden>
              Role
            </option>
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="tel">No. Hp</label>
          <input
            className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
            type="tel"
            name="tel"
            id="tel"
            onChange={handleChange}
            placeholder="0852 ..."
          />
        </div>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="****"
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => onNext()}
          className="btn-sign-dark-outline flex items-center gap-2"
          type="submit"
        >
          <BsPersonFillAdd />
          Add
        </button>
      </div>
    </form>
  );
};

export default ModalCreateUser;
