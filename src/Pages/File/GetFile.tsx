import { useState } from "react";
import toast from "react-hot-toast";

const GetFile = () => {
  const [downloadCode, setDownloadCode] = useState<string>("");

  const handleDownload = () => {
    if (!downloadCode.trim()) {
      toast.error("Please enter a code");
      return;
    }
    window.open(
      `http://localhost:3003/api/v1/files/download/${downloadCode}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto">
      <input
        type="text"
        value={downloadCode}
        onChange={(e) => setDownloadCode(e.target.value)}
        placeholder="Enter share code"
        className="rounded-3xl p-4 bg-gray-800 border-2 border-gray-700 focus:border-indigo-500 outline-none text-white placeholder-gray-400 transition"
      />
      <button
        onClick={handleDownload}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition shadow-md active:scale-95"
        type="button"
      >
        Download
      </button>
    </div>
  );
};

export default GetFile;
