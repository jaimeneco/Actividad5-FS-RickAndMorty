import { Datos } from "./Datos";
import React, { useState, useEffect } from "react";

export const Episodios = () => {
    const [episodios, setEpisodios] = useState([]);

    useEffect(() => {
        fetch(`${Datos}/episode`)
            .then((res) => res.json())
            .then((data) => setEpisodios(data.results));
    }, []);

    return (
        <>
        <div>
            <h2>Episodios</h2>
            <ul>
                {episodios.map((episodios) => (
                    <li key={episodios.id}>{episodios.name} - {episodios.episode}</li>
                ))}
            </ul>
        </div>
        </>
    );
};