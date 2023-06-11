import BarChart from "@/components/barChart";
import CardTriage from "@/components/cardTriage";
import { CgPhone } from "react-icons/cg";


export const metadata = {
  title : "Dashboard"
}

function page() {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 px-10 py-5 mb-5">
        <CardTriage />
      </div>
      <div className="p-7">
        <div className="p-5 bg-white shadow rounded-lg">
          <BarChart />
        </div>
        {/* <div className="p-7 bg-white shadow rounded-lg md:col-span-1">
          <h4 className="text-xl font-semibold mb-2">History</h4>
          <hr width="60%" className="border border-slate-700 mb-4" />
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 text-lg text-white rounded-xl bg-slate-700">
                <CgPhone />
              </div>
              <p>08326424328</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 text-lg text-white rounded-xl bg-slate-700">
                <CgPhone />
              </div>
              <p>08326424328</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 text-lg text-white rounded-xl bg-slate-700">
                <CgPhone />
              </div>
              <p>08326424328</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default page;
