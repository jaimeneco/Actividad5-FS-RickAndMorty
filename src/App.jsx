import { BrowserRouter as Router, Route, Routes, Link } from "react-router";
import "./App.css";

//Import de componentes:
import { Characters } from './components/Personajes';
import { Lugares } from "./components/Lugares";
import { Episodios } from "./components/Episodios";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/locations" element={<Lugares />} />
          <Route path="/episodes" element={<Episodios />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
