import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/library" element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
