import { BrowserRouter as Router, Route, Routes, Link } from "react-router";

export const Header = () => {
    return (
        <header>
            <img className="logo" src="./img/logo-rickMorty.png"></img>
            <nav>
                <button><Link to="/">Personajes</Link></button>
                <button><Link to="/locations">Lugares</Link></button>
                <button><Link to="/episodes">Episodios</Link></button>
            </nav>
        </header>
    );
};