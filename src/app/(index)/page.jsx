"use client";

import Modal from "@/components/Modal/modal";
import ModalFormPasien from "@/components/Modal/modalFormPasien";
import TriaseBerjalan from "@/components/Modal/modalTriage/triaseBerjalan";
import TriaseBernafas from "@/components/Modal/modalTriage/triaseBernafas";
import TriaseFrekuensi from "@/components/Modal/modalTriage/triaseFrekuensi";
import TriasePerfusi from "@/components/Modal/modalTriage/triasePerfusi";
import TriasePosisi from "@/components/Modal/modalTriage/triasePosisi";
import TriaseRespon from "@/components/Modal/modalTriage/triaseRespon";
import { useState } from "react";
import { RiHeartAddFill } from "react-icons/ri";

export default function Home() {
  const [toggleModalPasien, setToggleModalPasien] = useState(false);
  const [toggleTriase, setToggleTriase] = useState(false);
  const [bernafas, setBernafas] = useState(false);
  const [posisikan, setPosisikan] = useState(false);
  const [frekuensiNafas, setFrekuensiNafas] = useState(false);
  const [perfusi, setPerfusi] = useState(false);
  const [respon, setRespon] = useState(false);

  return (
    <>
      <main className="flex items-center justify-center h-screen text-white">
        <div className="text-xl flex flex-col items-center">
          <button
            onClick={() => {
              setToggleModalPasien(true);
            }}
            className="btn-dark-action flex items-center"
          >
            <span className="text-2xl mr-3">
              <RiHeartAddFill />
            </span>{" "}
            Pasien Baru
          </button>
        </div>
      </main>
      <Modal
        isVisible={toggleModalPasien}
        onClose={() => setToggleModalPasien(false)}
        title={"Informasi dasar"}
      >
        <ModalFormPasien
          onNext={() => {
            setToggleModalPasien(false);
            setToggleTriase(true);
          }}
        />
      </Modal>
      <Modal
        isVisible={toggleTriase}
        onClose={() => setToggleTriase(false)}
        title={"Mohon Diisi"}
      >
        <TriaseBerjalan
          onNext={() => {
            setToggleTriase(false);
            setBernafas(true);
          }}
          onClose={() => setToggleTriase(false)}
        />
      </Modal>
      <Modal
        isVisible={bernafas}
        onClose={() => setBernafas(false)}
        title={"Mohon Diisi"}
      >
        <TriaseBernafas
          onNo={() => {
            setBernafas(false);
            setPosisikan(true);
          }}
          onYes={() => {
            setBernafas(false);
            setFrekuensiNafas(true);
          }}
        />
      </Modal>
      <Modal
        isVisible={posisikan}
        onClose={() => setPosisikan(false)}
        title={"Mohon Diisi"}
      >
        <TriasePosisi onClose={() => setPosisikan(false)} />
      </Modal>
      <Modal
        isVisible={frekuensiNafas}
        onClose={() => setFrekuensiNafas(false)}
        title={"Mohon Diisi"}
      >
        <TriaseFrekuensi
          onNext={() => {
            setFrekuensiNafas(false);
            setPerfusi(true);
          }}
          onClose={() => setFrekuensiNafas(false)}
        />
      </Modal>
      <Modal
        isVisible={perfusi}
        onClose={() => setPerfusi(false)}
        title={"Mohon Diisi"}
      >
        <TriasePerfusi
          onNext={() => {
            setPerfusi(false);
            setRespon(true);
          }}
          onClose={() => setPerfusi(false)}
        />
      </Modal>
      <Modal
        isVisible={respon}
        onClose={() => setRespon(false)}
        title={"Mohon Diisi"}
      >
        <TriaseRespon onClose={() => setRespon(false)} />
      </Modal>
    </>
  );
}
