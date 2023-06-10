'use client'

import { useState } from "react";
import { RxUpdate } from "react-icons/rx"
import Swal from "sweetalert2";

const ModalUpdateUser = ({ onNext }) => {
  const [data, setData] = useState({
    nama   : "",
    email  : "",
    gender : "",
    role   : "",
    tel    : 0,
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
      nama   : data.nama,
      email  : data.email,
      gender : data.gender,
      role   : data.role,
      tel    : data.tel,
    }

    try {
      const res = await fetch('/api/user', {
        method : 'PATCH',
        headers : {
          'Content-Type' : 'aplication/json'
        },
        body : JSON.stringify({ userData })
      })
      if (res.status === 200) {
        Swal.fire('Success', 'User Successfully Updatted', 'success')
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
          placeholder="fafa@yahoo.com"
        />
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-1">
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
            onChange={handleChange}
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
      <div className="flex justify-end">
        <button
          onClick={() => onNext()}
          className="btn-sign-dark-outline flex items-center gap-2"
          type="submit"
        >
          <RxUpdate />
          Update
        </button>
      </div>
    </form>
  );
};

export default ModalUpdateUser;
