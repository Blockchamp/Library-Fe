import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library/Library";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchField from "./components/SearchField";
import Footer from "./components/Footer";
import Personal from "./pages/Personal/Personal";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/library" element={<Library />} />
          <Route exact path="/personal" element={<Personal />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
