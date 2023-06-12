import Link from "next/link";
import NavMenu from "./NavMenu";

export default function NavList({ onNav }) {
  return (
    <div className="md:flex md:space-y-0 space-y-5 items-center">
    <div onClick={() => onNav()}>
        <Link href={'/about'} className="text-white px-4 py-3 transition-all duration-300 ease-in font-bold hover:rounded-3xl hover:bg-white hover:text-gray-400 text-lg drop-shadow">
        Tentang Kami
        </Link>
    </div>
    <div onClick={() => onNav()}>
        <Link href={'/instruksi'} className="text-white px-4 py-3 transition-all duration-300 ease-in font-bold hover:rounded-3xl hover:bg-white hover:text-gray-400 text-lg drop-shadow">
        Insturuksi
        </Link>
    </div>
    <div onClick={() => onNav()}>
        <Link href={'/dashboard'} className="text-white px-4 py-3 transition-all duration-300 ease-in font-bold hover:rounded-3xl hover:bg-white hover:text-gray-400 text-lg drop-shadow">
        Dashboard
        </Link>
    </div>
        {/* <NavMenu onNext={() => onNav()} link={'/about'} title={'Tentang Kami'} />
        <NavMenu onNext={() => onNav()} link={'/instruksi'} title={'Insturuksi'} />
        <NavMenu onNext={() => onNav()} link={'/dashboard'} title={'Dashboard'} /> */}
    </div>
  )
}
