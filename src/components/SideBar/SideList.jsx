import SideMenu from "./SideMenu";
import { AiFillSetting } from 'react-icons/ai'
import { FaUserCog } from 'react-icons/fa'
import { ImStatsDots } from 'react-icons/im'
import { MdSpaceDashboard } from 'react-icons/md'
import { BsFillPeopleFill } from 'react-icons/bs'
import { GoSignOut } from 'react-icons/go'

export default function SideList() {
  return (
    <div className="flex flex-col space-y-6 mx-2 mt-7">
        <SideMenu icon={<MdSpaceDashboard />} link={'/dashboard'}         title={'Beranda'} />
        <SideMenu icon={<BsFillPeopleFill />} link={'/dashboard/pasien'}  title={'Pasien'} />
        <SideMenu icon={<FaUserCog />}        link={'/dashboard/user'}    title={'User'} />
        <SideMenu icon={<AiFillSetting />}    link={'/dashboard/setting'} title={'Setting'} />
        <SideMenu icon={<GoSignOut />}        link={'/'}                  title={'Sign Out'} />
    </div>
  )
}
