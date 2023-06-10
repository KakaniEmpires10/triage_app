import NavMenu from "./NavMenu";

export default function NavList() {
  return (
    <div className="md:flex md:space-y-0 space-y-5 items-center">
        <NavMenu link={'/about'} title={'Tentang Kami'} />
        <NavMenu link={'/instruksi'} title={'Insturuksi'} />
        <NavMenu link={'/dashboard'} title={'Dashboard'} />
    </div>
  )
}
