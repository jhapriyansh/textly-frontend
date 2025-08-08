import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen w-screen bg-gradient-to-r from-black via-gray-900 to-gray-800">
      {/* Navbar */}
      <nav className="bg-gray-900 shadow-md p-4 flex justify-center">
        <h1 className="uppercase text-4xl font-extrabold tracking-wide text-white">
          textly.io
        </h1>
      </nav>

      {/* Main content */}
      <main className="flex flex-grow justify-center items-center gap-12 px-6">
        {/* Text Button */}
        <button
          onClick={() => navigate("/text")}
          className="flex flex-col items-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white rounded-3xl shadow-xl p-8 transition-transform transform hover:scale-110 hover:shadow-2xl"
        >
          <i className="fa-solid fa-table-list text-9xl mb-4"></i>
          <span className="text-xl font-semibold">Text</span>
        </button>

        {/* File Button */}
        <button
          onClick={() => navigate("/file")}
          className="flex flex-col items-center bg-gradient-to-br from-green-600 via-teal-700 to-cyan-600 text-white rounded-3xl shadow-xl p-8 transition-transform transform hover:scale-110 hover:shadow-2xl"
        >
          <i className="fa-solid fa-file text-9xl mb-4"></i>
          <span className="text-xl font-semibold">File</span>
        </button>
      </main>
    </div>
  );
};

export default Home;
