"use client";

import Modal from "@/components/Modal/modal";
import ModalCreateUser from "@/components/Modal/modalCreateUser";
import ModalUpdateUser from "@/components/Modal/modalUpdateUser";
import TableUser from "@/components/Tables/tableUser";
import { useState } from "react";

const DataUser = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);

  return (
    <>
      <div className="bg-white shadow p-7 rounded-lg space-y-5">
        <h2 className="text-3xl font-bold">User</h2>
        <hr width="40%" className="border-black" />
        <div className="leading-normal">
          <p>
            Berikut adalah list dari setiap user yang menggunakan webApp ini. Didalam ini terdapat informasi nomor hp dan role dari setiap user. disini juga bisa membuat user baru, menghapus user(khusus admin) dan mengedit data user yang sudah ada
          </p>
        </div>
        <TableUser
          openModal={() => setShowModalAdd(true)}
          openDetail={() => setShowModalDetail(true)}
        />
      </div>
      <Modal
        isVisible={showModalAdd}
        onClose={() => setShowModalAdd(false)}
        title={"Tambah User"}
      >
        <ModalCreateUser onNext={() => showModalAdd(false)} />
      </Modal>
      <Modal
        isVisible={showModalDetail}
        onClose={() => setShowModalDetail(false)}
        title={"Edit User"}
      >
        <ModalUpdateUser onNext={() => showModalDetail(false)} />
      </Modal>
    </>
  );
};

export default DataUser;
