import { BiSearchAlt } from "react-icons/bi"
import { BsFillTrash3Fill } from "react-icons/bs"
import { GoDash } from "react-icons/go"
import { MdEditDocument } from "react-icons/md"

const TablePasien = ({ openModal }) => {
  return (
    <>
      <div>
          <form>
            <div className="flex items-center">
              <div className="flex item-center space-x-2 mr-3">
                <input
                  type="date"
                  name="dateFirst"
                  id="dateFirst"
                  placeholder="Tanggal-Awal"
                />
                <GoDash className="m-auto" />
                <input
                  type="date"
                  name="dateLast"
                  id="dateLast"
                  placeholder="Tanggal-Akhir"
                />
              </div>
            <label
              className="ml-2 mb-1 font-semibold hidden"
              htmlFor="p-search"
            >
              Cari
            </label>
              <input
                id="p-search"
                className="rounded-2xl"
                type="search"
                placeholder="Cari ..."
              />
              <button
                className="p-2 ml-2 text-white text-xl rounded-2xl bg-slate-700 border-2 border-white hover:bg-slate-100 hover:border-black hover:text-black duration-300"
                type="submit"
              >
                <BiSearchAlt />
              </button>
            </div>
          </form>
        </div>
        <table className="w-full">
          <thead>
            <tr className="bg-slate-500 text-white px-3">
              <td width={"5%"} className="py-3 text-center">
                No.
              </td>
              <td className="py-3">Triase</td>
              <td className="py-3">Profile</td>
              <td className="py-3">Nama</td>
              <td className="py-3">Usia</td>
              <td className="py-3">Jenis Kelamin</td>
              <td className="py-3">Lokasi</td>
              <td className="py-3">No pelapor</td>
              <td className="py-3">Action</td>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-slate-400">
              <td width={"2%"} className="py-3 text-center">
                01
              </td>
              <td className="py-3"></td>
              <td className="py-3">
                <span className="p-2 bg-yellow-400 rounded-xl">no_img</span>
              </td>
              <td width={"20%"} className="py-3">
                Andi
              </td>
              <td className="py-3">30</td>
              <td className="py-3">L</td>
              <td className="py-3">Geulumpang</td>
              <td className="py-3"></td>
              <td className="py-3 flex gap-2">
                <button onClick={() => openModal()} className="p-1 rounded-full text-white bg-blue-600 hover:bg-blue-300 duration-200">
                  <MdEditDocument />
                </button>
                <button className="p-1 rounded-full text-white bg-rose-600 hover:bg-rose-300 duration-200">
                  <BsFillTrash3Fill />
                </button>
              </td>
            </tr>
            <tr className="bg-slate-200">
              <td width={"2%"} className="py-3 text-center">
                02
              </td>
              <td className="py-3"></td>
              <td className="py-3">
                <span className="p-2 bg-yellow-400 rounded-xl">no_img</span>
              </td>
              <td className="py-3">bandi</td>
              <td className="py-3">25</td>
              <td className="py-3">L</td>
              <td className="py-3">Lambleut</td>
              <td className="py-3"></td>
              <td className="py-3 flex gap-2">
                <button className="p-1 rounded-full text-white bg-blue-600 hover:bg-blue-300 duration-200">
                  <MdEditDocument />
                </button>
                <button className="p-1 rounded-full text-white bg-rose-600 hover:bg-rose-300 duration-200">
                  <BsFillTrash3Fill />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
    </>
  )
}

export default TablePasien