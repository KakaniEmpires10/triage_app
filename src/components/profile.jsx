import Image from "next/image";

export default function Profile() {
  return (
    <>
      <div className="flex items-center justify-center gap-4 px-12 py-2 bg-gradient-to-r from-transparent via-slate-500 to-transparent rounded-full cursor-pointer hover:bg-gradient-to-r hover:from-slate-500 hover:via-transparent hover:to-slate-500 transition-all duration-300">
        <div className="text-white text-right">
          <p className="font-bold text-sm">Nama Disini</p>
          <p>
            <small>
              <i>Kategori</i>
            </small>
          </p>
        </div>
        <Image
          className="rounded-full shadow shadow-slate-700 object-cover object-center"
          src={"/profile.png"}
          width={45}
          height={45}
          alt="profile"
        />
      </div>
    </>
  );
}
