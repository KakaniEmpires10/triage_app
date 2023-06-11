"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const TriasePerfusi = ({ onNext, onClose }) => {
  const [pasien, setPasien] = useState(null);
  
  useEffect(() => {
    const fetchId = async () => {
      const res = await fetch("api/patient");
      if (res.status !== 200) {
        throw new Error("something went wrong");
      }
      const data = await res.json();
      if (data) {
        const lastItem = data[data.length - 1];
        const pasienId = lastItem._id;
        setPasien(pasienId);
      }
    };
    fetchId();
  }, [pasien]);

  const handleUpdate = async (id) => {
    const update = {
      triase: "red",
    };
    try {
      const res = await fetch(`/api/patient/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify({ update }),
      });
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Kau adalah pahlawan bagi orang-orang disekitarmu",
          showConfirmButton: false,
          timer: 1500,
        });
        onClose();
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <div className="py-5">
      <p className="text-2xl font-semibold">
        Periksa Waktu Pengisian Kapiler (dengan menekan kuku jari dan melihat berapa lama kuku tersebut merah kembali)
      </p>
      <Image className="rounded-lg" src={"/ctr.jpg"} alt="ctr" height={200} width={200} />
      <div className="flex justify-end gap-4 mt-3">
        <button
          className="px-4 py-2 bg-rose-700 rounded-xl text-white hover:bg-rose-500 duration-300"
          onClick={() => handleUpdate(pasien)}
        >
          <strong>&gt; 2 detik</strong>
        </button>
        <button
          className="px-4 py-2 bg-green-700 rounded-xl text-white hover:bg-green-500 duration-300"
          onClick={() => onNext()}
        >
          <strong>&lt; 2 detik</strong>
        </button>
      </div>
    </div>
  );
};

export default TriasePerfusi;
