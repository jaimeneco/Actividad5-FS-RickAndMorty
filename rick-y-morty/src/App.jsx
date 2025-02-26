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
    <>
    <Header />
    <Characters/>
    <Lugares />
    <Episodios />
    <Footer />
    </>

    // <Router>
    //   <nav>
    //     <Link to="/">Personajes</Link>
    //     <Link to="/locations">Lugares</Link>
    //     <Link to="/episodes">Episodios</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Personajes />} />
    //     <Route path="/locations" element={<Lugares />} />
    //     <Route path="/episodes" element={<Episodios />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
