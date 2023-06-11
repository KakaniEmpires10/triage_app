"use client";

import { AiTwotoneAppstore } from "react-icons/ai";
import { MdDescription } from "react-icons/md";
import { HiBuildingLibrary } from "react-icons/hi2";
import { IoLogoReact } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import Swal from "sweetalert2";
import { useState } from "react";

const ConfigForm = async () => {
  const [data, setData] = useState({
    appName : "",
    appDesc : "",
    insName : "",
    insDesc : "",
    logo    : "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const configData = {
      appName : data.appName,
      appDesc : data.appDesc,
      insName : data.insName,
      insDesc : data.insDesc,
      logo    : data.logo,
    }

    try {
      const res = await fetch("/api/config", {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ configData }),
      });
      if (res.status === 200) {
        Swal.fire("Success", 'Updatted Successfully', "success");
      }
    } catch (err) {
      throw new Error(err.message)
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="space-y-5 text-md font-semibold">
            <div>
              <label className="label-set" htmlFor="app">
                <span className="text-set">
                  <AiTwotoneAppstore />
                </span>{" "}
                Nama App
              </label>
              <input
                type="text"
                name="appName"
                id="app"
                value={data.appName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label-set" htmlFor="desk">
                <span className="text-set">
                  <MdDescription />
                </span>
                Deskripsi Aplikasi (Metadata)
              </label>
              <textarea
                name="appDesc"
                id="desk"
                value={data.appDesc}
                onChange={handleChange}
                cols="40"
                rows="5"
              ></textarea>
            </div>

            <div>
              <label className="label-set" htmlFor="instansi">
                <span className="text-set">
                  <HiBuildingLibrary />
                </span>
                Nama Instansi
              </label>
              <input
                type="text"
                name="insName"
                id="instansi"
                value={data.insName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label-set" htmlFor="about">
                <span className="text-set">
                  <MdDescription />
                </span>
                Deskripsi Instansi
              </label>
              <textarea
                name="insDesc"
                id="about"
                value={data.insDesc}
                onChange={handleChange}
                cols="40"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="space-y-5 text-md font-semibold">
            <div>
              <label className="label-set" htmlFor="logoSet">
                <span className="text-set">
                  <IoLogoReact />
                </span>
                Ganti Logo
              </label>
              <input
                className="mt-3 block border rounded-l-3xl text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white file:cursor-pointer hover:file:bg-slate-600"
                type="file"
                name="logo"
                id="logoSet"
                accept="image/*"
                value={data.logo}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                className="btn-dark-action text-white flex items-center gap-4"
                type="submit"
              >
                <span className="text-xl">
                  <IoIosSave />
                </span>
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ConfigForm;
