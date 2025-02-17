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