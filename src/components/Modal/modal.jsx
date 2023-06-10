import { AiFillCloseCircle } from "react-icons/ai";

const Modal = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') {
      onClose();
    }
  };

  return (
    <div id="wrapper" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center sm:p-0 p-3" onClick={handleClose}>

      <div className="flex flex-col w-[600px]">

        <button className="text-3xl text-rose-700 hover:text-rose-600 duration-300 w-fit bg-white hover:bg-slate-400 rounded-full self-end hover:scale-110" onClick={() => onClose()}>
          <AiFillCloseCircle />
        </button>

        <div className="space-y-3 bg-white w-full shadow-md rounded-lg py-8 px-14">
          <h3 className="text-2xl font-semibold text-center">{title ? title : "Modal"}</h3>
          <hr width="60%" className="border-black mx-auto" />
          {children}
        </div>
        
      </div>

    </div>
  );
};

export default Modal;
