import Image from "next/image";

export const metadata = {
  title : "Tentang Kami"
}

function page() {
  return (
    <main className="mx-64 mt-32">
      <div className="flex group flex-col items-center">
        <div className="relative bg-white/90 p-3 rounded-t-full translate-y-10 h-16 w-28 -z-[1] group-hover:bg-white group-hover:translate-y-1 group-hover:z-10 transition-all duration-300">
          <Image
            className="absolute left-5 scale-0 rounded-full object-cover object-center group-hover:scale-100 group-hover:shadow-md group-hover:shadow-slate-500 duration-300"
            src={"/profile.png"}
            width={70}
            height={70}
            alt="profile"
          />
        </div>
        <div className="bg-white/90 p-7 shadow-md rounded-2xl text-center group-hover:bg-white group-hover:shadow-slate-200 transition-all duration-300">
          <h2 className="text-2xl font-semibold group-hover:mt-5 duration-300">Siapa Kami ?</h2>
          <hr width="40%" className="border border-black my-5 mx-auto" />
          <p className="leading-relaxed pb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            reiciendis veritatis earum iste, ipsa ullam recusandae corporis
            tempore necessitatibus mollitia quia molestias reprehenderit fuga
            eos dolor! Laborum consectetur deleniti modi facilis quisquam vero
            rem <br /> numquam consequuntur dolores architecto laudantium dicta
            atque pariatur alias minus in, eaque neque odit itaque totam
            explicabo, ad fugiat? Tempore alias architecto, non dignissimos
            praesentium ea magnam, possimus cupiditate ipsum laborum provident
            nobis iusto ex quibusdam.
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;
