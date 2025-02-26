import { Datos } from "./Datos";
import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Episodios = () => {
    const [episodios, setEpisodios] = useState([]);

    useEffect(() => {
        fetch(`${Datos}/episode`)
            .then((res) => res.json())
            .then((data) => setEpisodios(data.results));
    }, []);

    return (
        <>
        <Header />
        <div>
            <h2>Episodios</h2>
            <ul>
                {episodios.map((ep) => (
                    <li key={episodios.id}>{episodios.name} - {episodios.air_date}</li>
                ))}
            </ul>
        </div>
        <Footer />
        </>
    );
};