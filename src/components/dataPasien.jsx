'use client'

import Modal from "@/components/Modal/modal";
import ModalUpdatePasien from "@/components/Modal/modalUpdatePasien";
import TablePasien from "@/components/Tables/tablePasien";
import { useState } from "react";

const DataPasien = () => {
    const [showModal, setShowModal] = useState(false)

    return (
      <>
        <div className="bg-white shadow p-7 rounded-lg space-y-5">
          <h2 className="text-3xl font-bold">Pasien</h2>
          <hr width="40%" className="border-black" />
          <div className="leading-normal">
            <p>
              Dalam menu ini admin dan super admin bisa melihat nama-nama korban beserta triase dari masing-masing korban berdasarkan artikulasi dari sistem. secara default data akan di filter berdasarkan tanggal hari namun admin tetap bisa memfilter berdasarkan tanggal dan kolom search (masih dalam development). <br/>
              admin juga bisa mengedit data pasien karena bisa dipastikan sebelumnya belum lengkap
            </p>
          </div>
          <TablePasien openModal={() => setShowModal(true)} />
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} title={"Update Data Pasien"}>
          <ModalUpdatePasien />
        </Modal>
      </>
    );
}

export default DataPasien