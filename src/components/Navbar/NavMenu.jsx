import Link from "next/link";

export default function NavMenu(props) {
  return (
    <div>
        <Link href={props.link} className="text-white px-4 py-3 transition-all duration-300 ease-in font-bold hover:rounded-3xl hover:bg-white hover:text-gray-400 text-lg drop-shadow">
            {props.title}
        </Link>
    </div>
  )
}
