import NavBrand from "../Navbar/NavBrand";
import SideList from "./SideList";

export default function SideBar(props) {
  return (
    <>
        <aside className={`bg-slate-600 ${props.stat ? 'w-0' : 'w-[250px]'} h-full overflow-x-hidden fixed left-0 top-0 bottom-0 transition-all duration-700`}>
            <div className="flex justify-center gap-3 items-center py-4 mr-2">
                <NavBrand />
                <p className="font-semibold text-white text-2xl">Triage App</p>
            </div>
            <hr className="bg-white" />
            <SideList />
        </aside>
    </>
  )
}
