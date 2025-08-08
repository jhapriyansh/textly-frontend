import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home";
import Text from "./Pages/Home/Text/Text";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text" element={<Text />} />
        <Route path="/file" element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
