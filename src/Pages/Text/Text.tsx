import { useState } from "react";
import Create from "./Create";
import Get from "./Get";

const Text = () => {
  const [sel, setSel] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={() => setSel(true)}
          className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
            sel
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white"
          }`}
        >
          Create Note
        </button>
        <button
          onClick={() => setSel(false)}
          className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
            !sel
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white"
          }`}
        >
          Get Note
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-lg">
        {sel ? <Create /> : <Get />}
      </div>
    </div>
  );
};

export default Text;
