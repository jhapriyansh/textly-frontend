import { useState } from "react";
import toast from "react-hot-toast";
import TextServices from "../../../Services/TextServices";

const Get = () => {
  const [code, setCode] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const handleSubmit = async () => {
    try {
      if (code.trim() === "") {
        toast.error("Can't fetch empty code");
        return;
      }
      const result = await TextServices.getText({ code });
      setNote(result.data.noteVal.text);
      toast.success("Fetched successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch note");
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-lg">
      <div className="flex gap-2">
        <input
          type="text"
          maxLength={6}
          placeholder="Enter code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-grow rounded-3xl p-4 bg-gray-800 border-2 border-gray-700 focus:border-indigo-500 outline-none text-white placeholder-gray-400 transition"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition shadow-md active:scale-95"
        >
          Get Note
        </button>
      </div>

      {note && (
        <textarea
          readOnly
          value={note}
          rows={10}
          className="w-full rounded-3xl p-4 bg-gray-800 border-2 border-gray-700 text-white resize-none"
        />
      )}
    </div>
  );
};

export default Get;
