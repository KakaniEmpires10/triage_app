import { BiSearchAlt } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { GoDash } from "react-icons/go";
import { MdEditDocument } from "react-icons/md";
import Swal from "sweetalert2";
import useSWR, { mutate } from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const TablePasien = async ({ openModal }) => {
  let counter = 1;

  const { data, error, isLoading } = useSWR('/api/patient', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/patient/${id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        Swal.fire("success", "Pasien berhasil dihapus", "success");
        mutate();
      }
    } catch (err) {
      console.log(err.message);
    }
  };

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
            <td className="py-3 text-center">Tanggal</td>
            <td className="py-3">Triase</td>
            <td className="py-3">Profile</td>
            <td className="py-3">Nama</td>
            <td className="py-3">Usia</td>
            <td className="py-3">Jenis Kelamin</td>
            <td className="py-3">Lokasi</td>
            <td className="py-3">No pelapor</td>
            <td className="py-3">jenis bencana</td>
            <td className="py-3">Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const timestamp = new Date(item.createdAt);
            const date = timestamp.toISOString().split("T")[0];

            return (
              <tr key={item._id} className="odd:bg-white even:bg-slate-300">
                <td width={"2%"} className="py-3 text-center">
                  {counter++}
                </td>
                <td className="py-3 text-center">{date}</td>
                <td className="py-3">
                  <div
                    className={`h-[20px] w-[20px] rounded-lg ${`bg-${item.triase}-500`}`}
                  >{item.triase}</div>
                </td>
                <td className="py-3">
                  <span className="p-2 bg-yellow-400 rounded-xl">no_img</span>
                </td>
                <td width={"20%"} className="py-3">
                  {item.name}
                </td>
                <td className="py-3">{item.usia}</td>
                <td className="py-3">{item.gender}</td>
                <td className="py-3">{item.lokasi}</td>
                <td className="py-3">0{item.nomorPelapor}</td>
                <td className="py-3">{item.kejadian}</td>
                <td className="py-3 flex gap-2">
                  <button
                    onClick={() => openModal()}
                    className="p-1 rounded-full text-white bg-blue-600 hover:bg-blue-300 duration-200"
                  >
                    <MdEditDocument />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-1 rounded-full text-white bg-rose-600 hover:bg-rose-300 duration-200"
                  >
                    <BsFillTrash3Fill />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TablePasien;
