'use client'

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavMenu({ href, children }) {
  let segment = useSelectedLayoutSegment()
  let active = href === `/${segment}`

  return (
    <div>
        <Link href={href} className={`px-4 py-3 transition-all duration-300 ease-in font-bold hover:rounded-3xl hover:bg-white hover:text-gray-400 text-lg drop-shadow ${active ? 'rounded-3xl bg-white text-gray-400' : 'text-white'}`}>
            {children}
        </Link>
    </div>
  )
}
