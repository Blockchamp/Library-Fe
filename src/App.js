import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "./App1.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
