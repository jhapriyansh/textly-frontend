import { useState } from "react";
import CreateFile from "./CreateFile";
import GetFile from "./GetFile";

const File = () => {
  const [sel, setSel] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">
      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={() => setSel(true)}
          className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
            sel
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white"
          }`}
        >
          Upload File
        </button>
        <button
          onClick={() => setSel(false)}
          className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
            !sel
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white"
          }`}
        >
          Download File
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-lg">
        {sel ? <CreateFile /> : <GetFile />}
      </div>
    </div>
  );
};

export default File;
