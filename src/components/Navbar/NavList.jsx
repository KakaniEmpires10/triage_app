import NavMenu from "./NavMenu";

export default function NavList({ onNav }) {
  return (
    <div className="md:flex md:space-y-0 space-y-5 items-center">
      <div onClick={() => onNav()}>
        <NavMenu href={"/about"}>Tentang Kami</NavMenu>
      </div>
      <div onClick={() => onNav()}>
        <NavMenu href={"/instruksi"}>Insturuksi</NavMenu>
      </div>
      <div onClick={() => onNav()}>
        <NavMenu href={"/dashboard"}>Dashboard</NavMenu>
      </div>
    </div>
  );
}
