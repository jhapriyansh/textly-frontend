import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const CreateFile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [shareCode, setShareCode] = useState<string>("");

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await axios.post(
        "http://localhost:3003/api/v1/files/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (data.success) {
        setShareCode(data.shareCode);
        toast.success("File uploaded successfully!");
      } else {
        toast.error(data.message || "Upload failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Upload failed");
    }
  };

  const handleCopyCode = () => {
    if (shareCode) {
      navigator.clipboard.writeText(shareCode);
      toast.success("Code copied to clipboard!");
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto justify-center items-center">
      <div className="flex flex-col gap-2 w-full">
        <label className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-full cursor-pointer transition w-full text-center">
          Choose File
          <input
            type="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            className="hidden"
          />
        </label>
        {file && (
          <p className="text-gray-300 text-sm italic truncate">
            Selected: {file.name}
          </p>
        )}
      </div>

      <button
        onClick={handleUpload}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition shadow-md active:scale-95 w-full"
        type="button"
      >
        Upload
      </button>
      {shareCode && (
        <div className="flex items-center justify-between bg-indigo-600 text-white p-4 rounded-md shadow-md">
          <span className="font-semibold">
            Share code: <code className="font-mono">{shareCode}</code>
          </span>
          <button
            onClick={handleCopyCode}
            className="ml-4 bg-indigo-800 hover:bg-indigo-900 text-white font-semibold py-2 px-4 rounded-full transition shadow-md active:scale-95"
            type="button"
          >
            Copy Code
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateFile;
