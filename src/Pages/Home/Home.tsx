import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#000] to-[#111]">
      {/* put the below line only in navbar */}
      <p className="uppercase text-center text-white text-3xl p-4">textly.io</p>
      <div className="flex justify-center items-center gap-2">
        <button className="text-white bg-black hover:text-black hover:bg-white p-[0.1rem] rounded-4xl text-[15rem] transition-all duration-150">
          <i
            className="fa-solid fa-table-list"
            onClick={() => {
              navigate("/text");
            }}
          ></i>
          <p className="text-lg">Text</p>
        </button>
        <button
          className="text-white bg-black hover:text-black hover:bg-white p-[0.1rem] rounded-4xl text-[15rem] transition-all duration-150"
          onClick={() => {
            navigate("/file");
          }}
        >
          <i className="fa-solid fa-file"></i>
          <p className="text-lg">File</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
