import { useState } from "react";
import toast from "react-hot-toast";
import TextServices from "../../../Services/TextServices";

const Create = () => {
  const [text, setText] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const handleSubmit = async () => {
    try {
      if (text.trim() === "") {
        toast.error("Can't post empty text");
        return;
      }
      const result = await TextServices.createtext({ text });
      setCode(result.data.hash);
      toast.success("Shared successfully");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const handleCopyCode = () => {
    if (code) {
      navigator.clipboard.writeText(code).then(() => {
        toast.success("Code copied to clipboard!");
      }).catch(() => {
        toast.error("Failed to copy code");
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-lg">
      {code && (
        <div className="flex items-center justify-between bg-indigo-600 text-white p-4 rounded-md shadow-md">
          <span className="font-semibold">
            Code for your note: <code className="font-mono">{code}</code>
          </span>
          <button
            onClick={handleCopyCode}
            className="ml-4 bg-indigo-800 hover:bg-indigo-900 text-white font-semibold py-2 px-4 rounded-full transition shadow-md active:scale-95"
            aria-label="Copy code to clipboard"
            type="button"
          >
            Copy Code
          </button>
        </div>
      )}

      <textarea
        value={text}
        rows={10}
        placeholder="Write your note here..."
        className="w-full rounded-3xl p-4 bg-gray-800 border-2 border-gray-700 focus:border-indigo-500 outline-none text-white resize-none transition"
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="self-end bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition shadow-md active:scale-95"
      >
        Share
      </button>
    </div>
  );
};

export default Create;
