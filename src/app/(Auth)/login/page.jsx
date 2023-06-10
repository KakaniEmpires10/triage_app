import LoginForm from "@/components/Form/loginForm";
import NavBrand from "@/components/Navbar/NavBrand";

export const metadata = {
  title: "Login",
};

const page = () => {
  const data = {
    Nama: "Muhammad",
    Instansi: "METE",
  };

  return (
    <main className="h-full">
      <div className="flex justify-center items-center">
        <div className="bg-white/70 shadow-md shadow-slate-800 p-7 mt-12 flex flex-col rounded-xl">
          <div className="text-center space-y-2 my-5">
            <h3 className="mb-5 text-2xl font-bold">
              Selamat Datang di Sistem Kami
            </h3>
            <div className="flex justify-center">
              <NavBrand />
            </div>
            <p className="text-lg">
              App Triase <span className="font-semibold">{data.Instansi}</span>
            </p>
            <p>Silahkan Login Terlebih Dahulu</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default page;
