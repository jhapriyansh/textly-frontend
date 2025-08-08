import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home";
import Text from "./Pages/Text/Text";
import File from "./Pages/File/File";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text" element={<Text />} />
        <Route path="/file" element={<File />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
