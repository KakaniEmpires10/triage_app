import Image from "next/image";

export const metadata = {
  title: "Tentang Kami",
};

function page() {
  return (
    <main className="mx-64 mt-28 mb-10">
      <div className="flex group flex-col items-center">
        <div className="relative bg-white/90 p-3 rounded-t-full translate-y-10 h-16 w-28 -z-[1] group-hover:bg-white group-hover:translate-y-1 group-hover:z-10 transition-all duration-300">
          <Image
            className="absolute left-5 scale-0 rounded-full object-cover object-center group-hover:scale-100 group-hover:shadow-md group-hover:shadow-slate-500 duration-300"
            src={"/favicon2.png"}
            width={70}
            height={70}
            alt="profile"
          />
        </div>
        <div className="bg-white/90 p-7 shadow-md rounded-2xl text-center group-hover:bg-white group-hover:shadow-slate-200 transition-all duration-300">
          <h2 className="text-2xl font-semibold group-hover:mt-5 duration-300">
            Tentang Kami
          </h2>
          <hr width="40%" className="border border-black my-5 mx-auto" />
          <p className="leading-loose text-lg pb-5 text-justify">
            Teknologi sistem informasi kesehatan merupakan gabungan perangkat
            dan prosedur yang digunakan untuk mengelola siklus informasi kinerja
            sistem kesehatan <br /> Salah satu bentuk inovasi pemanfaatan teknologi
            sistem informasi ini adalah aplikasi METE (Mobile Emergency Triage). <br />
            <strong>METE</strong> merupakan aplikasi yang berfungsi untuk mempercepat penyaluran
            informasi kegawatdaruratan bencana yang membutuhkan bantuan medis ke
            area bencana. Aplikasi sederhana ini dirancang untuk memudahkan
            seluruh masyarakat mendata dan menginformasikan terkait korban yang
            terkena bencana dan membutuhkan pertolongan medis.<br /> Penggunaan
            aplikasi ini sangat praktis dan mudah. Pengguna cukup memilih jenis
            bencana yang sedang terjadi. Kemudian mengisi data korban dengan
            nama, tanggal lahir serta memilih gejala-gejala yang didialaminya
            dilapangan. Lalu sistem secara otomatis akan menganalisa dan
            mengklasifikasikan sesuai data yang dimasukkan.<br /> Harapan kami, METE
            (Mobile Emergency Triage) sebagai inovasi IPTEK masa kini dengan
            pemanfaataan teknologi informasi dapat menjadi salah satu solusi
            untuk penanganan kegawatdaruratan.
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;
