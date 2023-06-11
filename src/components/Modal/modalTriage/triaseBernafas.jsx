const TriaseBernafas = ({ onYes, onNo }) => {

  const handleSubmit = async (e) => {
    e.prevenDefault();
    
  };

  return (
    <form className="py-5" onSubmit={handleSubmit}>
      <p className="text-2xl font-semibold">Apakah Korban Bernafas ?</p>
      <div className="flex justify-end gap-4 mt-3">
        <button
          className="px-4 py-2 bg-rose-700 rounded-xl text-white hover:bg-rose-500 duration-300"
          onClick={() => onNo()}
        >
          Tidak
        </button>
        <button
          className="px-4 py-2 bg-green-700 rounded-xl text-white hover:bg-green-500 duration-300"
          onClick={() => onYes()}
        >
          Ya
        </button>
      </div>
    </form>
  );
};

export default TriaseBernafas;
