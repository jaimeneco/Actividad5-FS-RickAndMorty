import { Datos } from "./Datos";
import React, { useState, useEffect } from "react";

export const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        fetch(`${Datos}/character?page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.results);
                setTotalPages(data.info.pages);
            });
    }, [page]);

    const filteredCharacters = characters.filter((char) =>
        filter ? char.species.toLowerCase() === filter : true
    ).slice(0, 12); // Limitar a 12 personajes por página

    return (
        <div>
            <h2>Personajes</h2>
            <div>
                <button onClick={() => setFilter("")}>Todos</button>
                <button onClick={() => setFilter("human")}>Humanos</button>
                <button onClick={() => setFilter("alien")}>Aliens</button>
            </div>
            <div className="grid">
                {filteredCharacters.map((char) => (
                    <div key={char.id} className="card">
                        <img src={char.image} alt={char.name} />
                        <h3>{char.name}</h3>
                        <p>{char.species}</p>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Anterior
                </button>
                <span>
                    Página {page} de {totalPages}
                </span>
                <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                    Siguiente
                </button>
            </div>
        </div>
    );
};



