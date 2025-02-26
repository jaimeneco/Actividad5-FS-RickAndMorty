import { Datos } from "./Datos";
import { Header } from "./Header";
import { Footer } from "./Footer";
import React, { useState, useEffect } from "react";

export const Lugares = () => {
    const [lugares, setLugares] = useState([]);

    useEffect(() => {
        fetch(`${Datos}/location`)
            .then((res) => res.json())
            .then((data) => setLugares(data.results));
    }, []);

    return (
        <>
        <Header />
        <div>
            <h2>Lugares</h2>
            <ul>
                {lugares.map((lugar) => (
                    <li key={lugar.id}>{lugar.name} - {lugar.type}</li>
                ))}
            </ul>
        </div>
        <Footer />
        </>
    );
};