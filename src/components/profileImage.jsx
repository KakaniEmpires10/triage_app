import Image from 'next/image'

const ProfileImage = () => {
  return (
    <>
        <Image
          className="rounded-full shadow shadow-slate-700 object-cover object-center"
          src={"/profile.png"}
          width={45}
          height={50}
          alt="profile"
        />
    </>
  )
}

export default ProfileImage