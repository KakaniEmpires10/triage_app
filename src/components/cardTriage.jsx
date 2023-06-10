const CardTriage = () => {
  return (
    <>
      <div className="group relative text-center shadow-md bg-white/80 min-w-fit rounded-3xl py-6 px-20 space-y-3 hover:bg-white hover:shadow-rose-500 duration-500">
        <div className="absolute -top-5 -left-5 border-2 border-black shadow bg-red-600 rounded-2xl h-16 w-16 group-hover:shadow-rose-500 duration-500"></div>
        <h3 className="text-lg text-rose-700 font-semibold drop-shadow-sm">
          Merah
        </h3>
        <hr width="40%" className="mx-auto border-rose-700" />
        <p className="py-2 drop-shadow-sm text-xl">120</p>
      </div>

      <div className="group relative text-center shadow-md bg-white/80 min-w-fit rounded-3xl py-6 px-20 space-y-3 hover:bg-white hover:shadow-yellow-500 duration-500">
        <div className="absolute -top-5 -left-5 border-2 border-black shadow bg-yellow-400 rounded-2xl h-16 w-16 group-hover:shadow-yellow-500 duration-500"></div>
        <h3 className="text-lg text-yellow-400 font-semibold drop-shadow-sm">
          Kuning
        </h3>
        <hr width="40%" className="mx-auto border-yellow-700" />
        <p className="py-2 drop-shadow-sm text-xl">120</p>
      </div>

      <div className="group relative text-center shadow-md bg-white/80 min-w-fit rounded-3xl py-6 px-20 space-y-3 hover:bg-white hover:shadow-green-500 duration-500">
        <div className="absolute -top-5 -left-5 border-2 border-black shadow bg-green-600 rounded-2xl h-16 w-16 group-hover:shadow-green-500 duration-500"></div>
        <h3 className="text-lg text-green-600 font-semibold drop-shadow-sm">
          Hijau
        </h3>
        <hr width="40%" className="mx-auto border-green-700" />
        <p className="py-2 drop-shadow-sm text-xl">120</p>
      </div>

      <div className="group relative text-center shadow-md bg-white/80 min-w-fit rounded-3xl py-6 px-20 space-y-3 hover:bg-white hover:shadow-slate-500 duration-500">
        <div className="absolute -top-5 -left-5 border-2 border-black shadow bg-slate-800 rounded-2xl h-16 w-16 group-hover:shadow-slate-500 duration-500"></div>
        <h3 className="text-lg text-slate-800 font-semibold drop-shadow-sm">
          Hitam
        </h3>
        <hr width="40%" className="mx-auto border-slate-700" />
        <p className="py-2 drop-shadow-sm text-xl">120</p>
      </div>
    </>
  );
};

export default CardTriage;
