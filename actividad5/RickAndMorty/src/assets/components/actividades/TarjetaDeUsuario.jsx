import { useState } from "react";
import './TarjetaDeUsuario.css'

export const TarjetaDeUsuario = ({ usuario }) => {
    return (
                <>
                    {usuario.map((usuario) => {
                        return (
                            <Usuario key={usuario.id} datos={usuario} />
                                )
                    })}
                </>
            );
}

const Usuario = ({ datos }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { name, status, species, gender, url, image} = datos;

    return (
        <>
        <div className="Card">
            <img src={image} alt={name} />
            <ul>
                <li>Name: {name}</li>
                <li>Alive?: {status} </li>
                <li>From: {species} </li>
                <li>It is a: {gender} </li>
            </ul>
        </div>
        </>
    )
}

import { useEffect, useState } from "react";

// export const FetchUsers = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const loadData = async () => {

//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users');
//             if (!response.ok) {
//                 throw new Error("Error al obtener usuarios");
//             }

//             const data = await response.json();
//             setUsers(data);
//             setLoading(false);

//         } catch (error) {
//             console.error("Error en el Fetch: ", error);
//             setLoading(false);
//         }
//     }



//         useEffect(() => {
//             loadData();
//         }, []);


//         return (
//             <div>
//                 <h2>FetchUsers</h2>
//                 { loading   ? ( <p>Buscando datos...</p> )
//                             : ( <ul>
//                                    { users.map( user => (
//                                         <li key={user.id}> {user.name} </li>
//                                     ))}
//                                 </ul>)}
//             </div>
//         );
//     }