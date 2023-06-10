import { useState } from "react";
import { RxUpdate } from "react-icons/rx";

const ModalUpdatePasien = () => {
  const [data, setData] = useState({
    nama: "",
    email: "",
    gender: "",
    tel: 0,
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
        <label htmlFor="triase" className="text-lg font-semibold">Triase</label>
        <div id="triase" className="space-x-8 flex">
          <div>
            <label htmlFor="triaseMerah">Merah</label>
            <input type="radio" name="triaseMerah" id="triaseMerah" />
          </div>
          <div>
            <label htmlFor="triaseKuning">Kuning</label>
            <input type="radio" name="triaseKuning" id="triaseKuning" />
          </div>
          <div>
            <label htmlFor="triaseHijau">Hijau</label>
            <input type="radio" name="triaseHijau" id="triaseHijau" />
          </div>
          <div>
            <label htmlFor="triaseHitam">Hitam</label>
            <input type="radio" name="triaseHitam" id="triaseHitam" />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="nama">Nama Pasien</label>
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
        <label htmlFor="usia">Usia</label>
        <input
          className="w-full border-0 border-b-2 border-black focus:border-0 focus:border-b-2 focus:border-slate-600 focus:ring-0 duration-200"
          type="number"
          name="usia"
          id="usia"
          onChange={handleChange}
          placeholder="21"
        />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-1">
          <label htmlFor="gender">gender</label>
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

export default ModalUpdatePasien;
