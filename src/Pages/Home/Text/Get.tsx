import { useState } from "react";
import toast from "react-hot-toast";
import TextServices from "../../../Services/TextServices";

const Get = () => {
  const [code, setCode] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const handleSubmit = async () => {
    try {
      if (code === "") {
        toast.error("Can't fetch empty code");
        return;
      }
      const result = await TextServices.getText({ code });
      setNote(result.data.noteVal.text);
      toast.success("Fetched successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <label>
        <input
          className="border-2 border-black border-solid"
          value={code}
          type="text"
          maxLength={6}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <button type="button" className="" onClick={handleSubmit}>
          Get Note
        </button>
        {note !== "" && (
          <textarea
            value={note}
            cols={30}
            rows={10}
            readOnly
            className="border-black border-2 border-solid rounded-3xl p-2"
          />
        )}
      </label>
    </div>
  );
};

export default Get;
