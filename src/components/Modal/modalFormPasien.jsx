'use client'

import { useState } from "react";
import { SiGooglemaps } from "react-icons/si";

const ModalFormPasien = ({ onNext }) => {
  const [data, setData] = useState({
    nama: "",
    usia: 0,
    tel: 0,
    gender: "",
    foto: "",
    triase: "",
    kejadian: "",
    lokasi: "",
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

    const pasienData = {
      nama: data.nama,
      usia: data.usia,
      nomorPelapor: data.tel,
      gender: data.gender,
      foto: data.foto,
      lokasi: data.lokasi,
      kejadian: data.kejadian,
      triase: "",
    };

    try {
      const res = await fetch("/api/patient", {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify({ pasienData }),
      });
      if (res.status === 201) {
        onNext();
      }
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something Went Wrong",
        showConfirmButton: false,
        timer: 1000,
      });
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
        <label htmlFor="nama">Nama Korban</label>
        <input
          className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
          type="text"
          name="nama"
          id="nama"
          onChange={handleChange}
          placeholder="Bambang... ( jika tau )"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="col-span-1">
          <label htmlFor="usia">Perkiraan Usia Korban</label>
          <input
            className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
            type="number"
            name="usia"
            id="usia"
            onChange={handleChange}
            min={1}
            max={120}
            placeholder="21 ..."
            required
          />
        </div>
        <div className="col-span-1 sm:col-span-2 mt-6">
          <label htmlFor="tel">Nomor HP Anda</label>
          <input
            className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
            type="tel"
            name="tel"
            id="tel"
            onChange={handleChange}
            minLength={10}
            maxLength={13}
            placeholder="0823 ..."
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="lokasi">Lokasi Sekarang</label>
        <div className="flex gap-2">
          <input
            className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
            type="text"
            name="lokasi"
            id="lokasi"
            onChange={handleChange}
            placeholder="jalan..., desa..., kec..., kab..., dll"
            required
          />
          <button
            type="button"
            className="rounded-xl text-xl p-2 border-2 border-black hover:bg-black hover:text-white hover:border-white duration-200"
          >
            <SiGooglemaps />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
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
        <div className="col-span-2">
          <label htmlFor="kejadian">Kejadian</label>
          <select
            name="kejadian"
            id="kejadian"
            className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
            onChange={handleChange}
            required
          >
            <option value={""} selected hidden>
              Pilih satu
            </option>
            <option value="gempa bumi">Gempa Bumi</option>
            <option value="tsunami">Tsunami</option>
            <option value="banjir">Banjir</option>
            <option value="tanah longsor">Tanah Longsor</option>
            <option value="letusan gunung">Letusan Gunung Berapi</option>
            <option value="badai">Badai</option>
            <option value="puting beliung">Puting Beliung</option>
            <option value="kecelakaan">Kecelakaan</option>
          </select>
        </div>
      </div>
      <div className="flex">
        <div>
          <label htmlFor="foto">
            Foto Korban{" "}
            <small className="text-red-600">(masih dalam development)</small>
          </label>
          <input
            className="mt-3 block border rounded-l-3xl w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black file:cursor-pointer file:text-white hover:file:bg-slate-600"
            type="file"
            name="foto"
            id="foto"
            capture="environment"
            accept="image*/"
            onChange={handleChange}
            placeholder=""
          />
        </div>
      </div>
      <button className="btn-sign-dark-outline block ms-auto" type="submit">
        Next
      </button>
    </form>
  );
};

export default ModalFormPasien;
