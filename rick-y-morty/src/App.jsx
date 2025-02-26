import { BrowserRouter as Router, Route, Routes, Link } from "react-router";
import "./App.css";

//Import de componentes:
// import {Personajes} from './components/Personajes';
import { Lugares } from "./components/Lugares";
import { Episodios } from "./components/Episodios";


const App = () => {
  return (
    <>
    {/* <Personajes/> */}
    <Lugares />
    <Episodios />
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
