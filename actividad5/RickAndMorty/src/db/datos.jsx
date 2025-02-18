import { useEffect, useState } from "react";

export const FetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {

        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            if (!response.ok) {
                throw new Error("Error al obtener usuarios");
            }

            const data = await response.json();
            setUsers(data);
            setLoading(false);

        } catch (error) {
            console.error("Error en el Fetch: ", error);
            setLoading(false);
        }
    }



        useEffect(() => {
            loadData();
        }, []);


        return (
            <div>
                <h2>FetchUsers</h2>
                { loading   ? ( <p>Buscando datos...</p> )
                            : ( <ul>
                                   { users.map( user => (
                                        <li key={user.id}> {user.name} </li>
                                    ))}
                                </ul>)}
            </div>
        );
    }


//----------------------------------------------
// EXPORTAR INFO USUARIOS DE UNO EN UNO:
//----------------------------------------------

// export const Usuario =[
// {
//     "id": 437,
//     "name": "Michael",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//       "name": "Earth (Replacement Dimension)",
//       "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "location": {
//       "name": "Earth (Replacement Dimension)",
//       "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/437.jpeg",
//     "episode": [
//       "https://rickandmortyapi.com/api/episode/12"
//     ],
//     "url": "https://rickandmortyapi.com/api/character/437",
//     "created": "2018-05-01T11:51:10.604Z"
// },
// {
//     "id": 197,
//     "name": "Kyle",
//     "status": "Dead",
//     "species": "Humanoid",
//     "type": "Miniverse inhabitant",
//     "gender": "Male",
//     "origin": {
//       "name": "Zeep Xanflorp's Miniverse",
//       "url": "https://rickandmortyapi.com/api/location/49"
//     },
//     "location": {
//       "name": "Kyle's Teenyverse",
//       "url": "https://rickandmortyapi.com/api/location/50"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/197.jpeg",
//     "episode": [
//       "https://rickandmortyapi.com/api/episode/17"
//     ],
//     "url": "https://rickandmortyapi.com/api/character/197",
//     "created": "2017-12-30T12:39:09.025Z"
//   },
//   {
//     "id": 499,
//     "name": "Fascist Morty",
//     "status": "Dead",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//       "name": "Earth (Fascist Dimension)",
//       "url": "https://rickandmortyapi.com/api/location/77"
//     },
//     "location": {
//       "name": "Earth (Fascist Dimension)",
//       "url": "https://rickandmortyapi.com/api/location/77"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/499.jpeg",
//     "episode": [
//       "https://rickandmortyapi.com/api/episode/32"
//     ],
//     "url": "https://rickandmortyapi.com/api/character/499",
//     "created": "2020-05-02T11:24:36.156Z"
//   }]