import Image from "next/image";
import Link from "next/link";

export default function NavBrand() {
  return (
    <div className="rounded-full cursor-pointer shadow-md shadow-slate-700 hover:shadow-slate-400 transition-all ease-in-out duration-300">
      <Link href={"/"}>
        <Image src={"/favicon2.png"} height={40} width={40} alt="logo" />
      </Link>
    </div>
  );
}
