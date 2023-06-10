"use client";

import { useState } from "react";
import { SiGooglemaps } from "react-icons/si";

const ModalFormUser = ({ onNext }) => {
  const [data, setData] = useState({
    nama: "",
    kejadian: "",
    tel: 0,
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="space-y-5"
      style={{ marginTop: "2.5em" }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="nama">Nama Anda</label>
        <input
          className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
          type="text"
          name="nama"
          id="nama"
          onChange={handleChange}
          placeholder="Andi Bang..."
        />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <label htmlFor="tel">Nomor Handphone</label>
          <input
            className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
            type="tel"
            name="tel"
            id="tel"
            onChange={handleChange}
            placeholder="0852..."
            required
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="gender">Kejadian</label>
          <select
            name="gender"
            id="gender"
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
          <button type="button" className="rounded-xl text-xl p-2 border-2 border-black hover:bg-black hover:text-white hover:border-white duration-200">
            <SiGooglemaps />
          </button>
        </div>
      </div>
      <button
        onClick={() => onNext()}
        className="btn-sign-dark-outline block ms-auto"
        type="submit"
      >
        Next
      </button>
    </form>
  );
};

export default ModalFormUser;
