// commit usando context

import { useContext } from "react";
import UserContext from "../context/UserContext";


const User = () => {
    // para acceder a la info usando context, se debe usar el hook useContext.
    // se crea una const y al hook se le pasa como parametro el archivo donde tenemos el Context
    const userData = useContext(UserContext)
    // tmb se puede hacer desestructuracion y pasar los valores solos:
    // const { name, age } = useContext(UserContext) ==> luego en los <p> se pasa solo name y age

    return <>
        <p>{userData.name}</p>
        <p>{userData.age}</p>
    </>
}

export default User;