import ConfigForm from "@/components/Form/configForm";
import Swal from "sweetalert2";

export const metadata = {
  title: "Setting App",
};

const Page = () => {
  return (
    <div className="bg-white shadow p-7 rounded-lg space-y-5">
      <h2 className="text-3xl font-bold">Konfigurasi</h2>
      <hr width="40%" className="border-black" />
      <div className="leading-normal">
        <p>
          Kostumisasikan aplikasi disini sesuai dengan keinginanmu, Happy Costumizing 🙏
        </p>
      </div>
      <ConfigForm />
    </div>
  );
};

export default Page;
