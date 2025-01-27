import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/projects";
import Shop from "./pages/shop";
import Hire from "./pages/hire";
import About from "./pages/about";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/consult" element={<Hire />} />
          <Route path="/non-profit" element={<Non-Profit />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;