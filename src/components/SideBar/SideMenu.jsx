import Link from "next/link";

export default function SideMenu(props) {
  return (
    <>
      <Link
        href={props.link}
        className="py-4 px-4 text-white hover:bg-slate-400 hover:text-slate-700 hover:rounded-2xl hover:font-bold hover:scale-105 transition-all ease-in-out duration-500 text-xl font-semibold drop-shadow-md focus:bg-slate-400 focus:text-slate-700 focus:font-bold focus:rounded"
      >
      <span className="mb-2">{props.icon}</span>
        {props.title}
      </Link>
    </>
  );
}
