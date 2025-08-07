import { useState } from "react";
import Create from "./Create";
import Get from "./Get";

const Text = () => {
  const [sel, setSel] = useState<boolean>(true);
  return (
    <div>
      <button
        className=""
        onClick={() => {
          setSel(true);
        }}
      >
        Create Note
      </button>
      <button
        className=""
        onClick={() => {
          setSel(false);
        }}
      >
        Get Note
      </button>
      {sel && <Create />}
      {!sel && <Get />}
    </div>
  );
};

export default Text;
