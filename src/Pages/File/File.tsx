import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const File = () => {
  const [file, setFile] = useState<File | null>(null);
  const [shareCode, setShareCode] = useState<string>("");
  const [downloadCode, setDownloadCode] = useState<string>("");

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3003/api/v1/files/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;

      if (data.success) {
        setShareCode(data.shareCode);
        toast.success("File uploaded successfully!");
      } else {
        toast.error(data.message || "Upload failed");
      }
    } catch (error) {
      console.log(error);

      toast.error("Failure");
    }
  };

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
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-lg text-white">
      <div className="mb-6 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Upload File</h2>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          className="text-white"
        />
        <button
          onClick={handleUpload}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full transition"
          type="button"
        >
          Upload
        </button>

        {shareCode && (
          <div className="mt-4 p-4 bg-indigo-700 rounded-md flex items-center justify-between">
            <span>
              Share code: <code className="font-mono">{shareCode}</code>
            </span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareCode);
                toast.success("Code copied to clipboard!");
              }}
              className="bg-indigo-800 hover:bg-indigo-900 py-1 px-3 rounded"
              type="button"
            >
              Copy
            </button>
          </div>
        )}
      </div>

      <hr className="my-6 border-gray-700" />

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Download File</h2>
        <input
          type="text"
          value={downloadCode}
          onChange={(e) => setDownloadCode(e.target.value)}
          placeholder="Enter share code"
          className="rounded-3xl p-3 bg-gray-800 border border-gray-700 outline-none text-white"
        />
        <button
          onClick={handleDownload}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-full transition"
          type="button"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default File;
