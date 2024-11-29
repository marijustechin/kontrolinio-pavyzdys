import { IoMdClose } from "react-icons/io";
import { useDonorContext } from "../service/DonorContext";
import axios from "axios";

interface IModalProps {
  open: boolean;
  id: string;
  onClose: () => void;
}

export const DeleteModal = ({ open, id, onClose }: IModalProps) => {
  const donorState = useDonorContext();

  const handleDelete = async () => {
    const res = await axios.delete(`http://localhost:8888/donors/${id}`);
    console.log(res.status);
    donorState.removeDonor(id);
    onClose();
  };

  return (
    /** overlejus */
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-slate-800/50" : "invisible"
      }`}
      onClick={onClose}
    >
      {/* langas */}
      <div
        // reikia sustabdyti is tevo
        // paveldeta onclik funkcija
        // onClick={(e) => e.stopPropagation()}
        className={`bg-slate-100 rounded-xl shadow p-6 transition-all text-lg w-[400px] ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-slate-500 bg-slate-50 hover:bg-slate-200 hover:text-slate-600"
        >
          <IoMdClose />
        </button>

        <div>Ar tikrai norite ištrinti kažką donorą, kurio ID yra {id}?</div>
        <div className="flex gap-3 items-center justify-center mt-3">
          <button onClick={handleDelete} className="btn-red">
            Taip
          </button>
          <button onClick={onClose} className="btn-green">
            Atsisakyti
          </button>
        </div>
      </div>
    </div>
  );
};
