"use client";

import Link from "next/link";
import NavBrand from "./NavBrand";
import NavList from "./NavList";
import ProfileImage from "../profileImage";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  // const { data: session } = useSession();

  const [opened, setOpened] = useState(false);

  return (
    <nav className="bg-slate-400 flex justify-between items-center py-3 px-10 shadow-md shadow-slate-500 fixed top-0 right-0 left-0 z-50">
      <NavBrand />
      <span
        onClick={() => setOpened((prev) => !prev)}
        className="text-3xl cursor-pointer md:hidden text-white hover:text-slate-800 duration-300"
      >
        {opened ? <AiOutlineClose /> : <BiMenuAltRight />}
      </span>

      <div
        className={`md:flex md:justify-end md:static md:py-0 py-5 absolute gap-3 md:z-auto z-[-3] md:opacity-100 opacity-0 bg-slate-400 w-full left-0 ${
          opened
            ? "md:translate-y-0 translate-y-[115px] opacity-100"
            : "md:translate-y-0 opacity-0"
        } transition-all duration-500`}
      >
        <NavList onNav={() => setOpened(false)}/>
        {/* {session?.user ? ( */}
          {/* <> */}
            {/* <button className="btn-sign ml-3 md:my-0 my-3">
              <Link href={"/login"}>Sign In</Link>
            </button>
            <div className="ml-3 md:block hidden">
              <ProfileImage />
            </div> */}
          {/* </> */}
        {/* ) : ( */}
          {/* <> */}
            {/* <button className="btn-sign ml-3 md:my-0 my-3">
              <Link href={"/"}>Sign Out</Link>
            </button> */}
          {/* </> */}
        {/* )} */}
      </div>
    </nav>
  );
}
