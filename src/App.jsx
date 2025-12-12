import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./components/IntroPage.jsx";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
