import Profile from "../profile";
import { CgMenuLeft } from "react-icons/cg";
import { MdNotificationImportant } from "react-icons/md";
import { AiFillDownCircle } from "react-icons/ai";

const TopBar = () => {
  return (
    <nav className="relative top-0 px-5 text-white">
      <div className="flex justify-between items-center py-1">
        <div className="text-3xl">
          <span className="cursor-pointer drop-shadow hover:text-slate-700 duration-300">
            <CgMenuLeft />
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-3xl cursor-pointer drop-shadow hover:text-slate-700 duration-300">
            <MdNotificationImportant />
          </span>
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
