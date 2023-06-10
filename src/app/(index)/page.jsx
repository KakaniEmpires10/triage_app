"use client";

import Modal from "@/components/Modal/modal";
import ModalFormPasien from "@/components/Modal/modalFormPasien";
import ModalFormUser from "@/components/Modal/modalFormUser";
import { useState } from "react";
import { RiHeartAddFill } from "react-icons/ri";

export default function Home() {
  const [toggleModalUser, setToggleModalUser] = useState(false);
  const [toggleModalPasien, setToggleModalPasien] = useState(false);

  return (
    <>
      <main className="flex items-center justify-center h-screen text-white">
        <div className="text-xl flex flex-col items-center">
          <button
            onClick={() => {
              setToggleModalUser(true);
            }}
            className="btn-dark-action flex items-center"
          >
            <span className="text-2xl mr-3">
              <RiHeartAddFill />
            </span>{" "}
            New Patient
          </button>
        </div>
      </main>
      <Modal isVisible={toggleModalUser} onClose={() => setToggleModalUser(false)} title={"Sedikit tentang anda"} >
        <ModalFormUser onNext={() => {
          setToggleModalPasien(true);
          setToggleModalUser(false)
        }} />
      </Modal>
      <Modal isVisible={toggleModalPasien} onClose={() => setToggleModalPasien(false)} title={"Sedikit tentang korban"} >
        <ModalFormPasien onNext={() => setToggleModalPasien(false)} />
      </Modal>
    </>
  );
}
