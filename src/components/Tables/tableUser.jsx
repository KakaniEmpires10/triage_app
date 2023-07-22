import { IoPersonAddSharp } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { MdEditDocument } from "react-icons/md";
import Swal from "sweetalert2";
import useSWR, { mutate } from "swr";


const fetcher = (...args) => fetch(...args).then(res => res.json())

const TableUser = async ({ openModal, openDetail }) => {
  let countRow = 1;

  const { data, error, isLoading } = useSWR('/api/user', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/user/${id}`, {
        method : 'DELETE',
      })
      if (res.status === 200) {
        Swal.fire('success', 'User berhasil dihapus', 'success')
        mutate()
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="flex items-baseline gap-5">
          <button
            onClick={() => openModal()}
            type="button"
            className="btn-dark-action text-white font-semibold flex items-center gap-4"
          >
            <span className="text-xl">
              <IoPersonAddSharp />
            </span>{" "}
            Add User
          </button>
        </div>
        <form className="flex items-center">
          <input className="rounded-2xl" type="search" placeholder="cari ..." />
          <button
            className="p-2 ml-2 text-white text-xl rounded-2xl bg-slate-700 border-2 border-white hover:bg-slate-100 hover:border-black hover:text-black duration-300"
            type="submit"
          >
            <BiSearchAlt />
          </button>
        </form>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-slate-500 text-white px-3">
            <td width={"5%"} className="py-3 text-center">
              No.
            </td>
            <td className="py-3">Profile</td>
            <td className="py-3">Nama</td>
            <td className="py-3">No. HP</td>
            <td className="py-3">Role</td>
            <td className="py-3">Action</td>
          </tr>
        </thead>
        <tbody className="border-b-1 border-black">
          {data.map((item) => {
            return (
              <tr key={item._id} className="odd:bg-white even:bg-slate-200">
                <td width={"2%"} className="py-3 text-center">
                  {countRow++}
                </td>
                <td className="py-3">
                  <span className="p-2 bg-yellow-400 rounded-xl">no_img</span>
                </td>
                <td className="py-3">{item.name}</td>
                <td className="py-3">0{item.telephone}</td>
                <td className="py-3">{item.role}</td>
                <td className="py-3 flex gap-2">
                  <button
                    onClick={() => openDetail()}
                    className="p-1 rounded-full text-white bg-blue-600 hover:bg-blue-300"
                  >
                    <MdEditDocument />
                  </button>
                  <button onClick={() => handleDelete(item._id)} className="p-1 rounded-full text-white bg-rose-600 hover:bg-rose-300">
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

export default TableUser;
