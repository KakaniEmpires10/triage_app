import { useState } from "react";
import { MdAddAPhoto } from "react-icons/md";

const ModalFormPasien = ({ onNext }) => {
  const [data, setData] = useState({
    nama   : "",
    usia   : "",
    gender : "",
    foto   : ""
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
      <div>
        <label htmlFor="usia">Perkiraan Usia Korban</label>
        <input
          className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
          type="number"
          name="usia"
          id="usia"
          onChange={handleChange}
          min={1}
          max={120}
          placeholder="21 - 30 ..."
          required
        />
      </div>
      <div className="flex items-center gap-5">
        <div>
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
        <div>
          <label htmlFor="foto">Foto Korban</label>
          <input
            className="mt-3 block border rounded-l-3xl w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black file:cursor-pointer file:text-white hover:file:bg-slate-600"
            type="file"
            name="foto"
            id="foto"
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <button className="mt-9 rounded-xl text-xl p-2 border-2 border-black hover:bg-black hover:text-white hover:border-white duration-200">
          <MdAddAPhoto />
        </button>
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

export default ModalFormPasien;
