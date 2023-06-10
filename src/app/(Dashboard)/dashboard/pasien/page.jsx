'use client'

import Modal from "@/components/Modal/modal";
import ModalUpdatePasien from "@/components/Modal/modalUpdatePasien";
import TablePasien from "@/components/Tables/tablePasien";
import { useState } from "react";

export const metadata = {
  title: "Daftar Pasien",
};

const Page = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="bg-white shadow p-7 rounded-lg space-y-5">
        <h2 className="text-3xl font-bold">Pasien</h2>
        <hr width="40%" className="border-black" />
        <div className="leading-normal">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            officiis voluptate earum ducimus ad doloremque, placeat repudiandae
            cupiditate, assumenda recusandae quo odit natus, ipsa possimus ullam
            reiciendis neque? Laboriosam, fuga!
          </p>
        </div>
        <TablePasien openModal={() => setShowModal(true)} />
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} title={"Update Data Pasien"}>
        <ModalUpdatePasien />
      </Modal>
    </>
  );
};

export default Page;
