"use client"

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function SideMenu({ href, icon, children }) {
  let segment = useSelectedLayoutSegment();
  let active  = href === `/${segment}`;

  return (
    <>
      <Link
        href={href}
        className={`py-4 px-4 text-white hover:bg-slate-400 hover:text-slate-700 hover:rounded-2xl hover:font-bold hover:scale-105 transition-all ease-in-out duration-500 text-xl font-semibold drop-shadow-md ${active && 'bg-slate-400 text-slate-700 font-bold rounded'}`}
      >
      <span className="mb-2">{icon}</span>
        {children}
      </Link>
    </>
  );
}
