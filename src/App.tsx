import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home";
import Text from "./Pages/Home/Text/Text";
// import Home from "./Pages/Home/Home";
const App = () => {
  return (
    <div>
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
