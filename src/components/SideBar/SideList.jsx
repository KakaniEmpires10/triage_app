import SideMenu from "./SideMenu";
import { AiFillSetting } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";

export default function SideList() {
  return (
    <div className="flex flex-col space-y-6 mx-2 mt-7">
      <SideMenu icon={<MdSpaceDashboard />} href={"/dashboard"}>
        Beranda
      </SideMenu>
      <SideMenu icon={<BsFillPeopleFill />} href={"/dashboard/pasien"}>
        Pasien
      </SideMenu>
      <SideMenu icon={<FaUserCog />} href={"/dashboard/user"}>
        User
      </SideMenu>
      <SideMenu icon={<AiFillSetting />} href={"/dashboard/setting"}>
        Setting
      </SideMenu>
      <SideMenu icon={<GoSignOut />} href={"/"}>
        Sign Out
      </SideMenu>
    </div>
  );
}
