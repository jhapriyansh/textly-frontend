import { useState } from "react";
import toast from "react-hot-toast";
import TextServices from "../../../Services/TextServices";

const Create = () => {
  const [text, setText] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const handleSubmit = async () => {
    try {
      if (text === "") {
        toast.error("Can't post empty text");
        return;
      }
      const result = await TextServices.createtext({ text });
      setCode(result.data.hash);
      toast.success("Shared successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {code !== "" && <div className="">Code for your note: {code}</div>}
      <div>
        <textarea
          value={text}
          cols={30}
          rows={10}
          className="border-black border-2 border-solid rounded-3xl p-2"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="button" onClick={handleSubmit}>
          Share
        </button>
      </div>
    </>
  );
};

export default Create;
