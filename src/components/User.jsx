// tiene como props user, como podemos ver la data tuvo q ser pasada como props entre 2 componentes para
// llegar hasta aca, esto podria haber sido mas componentes anidados y se vuelve muy complejo. Por eso,
// existe context. 
// Para verlo, va a estar en el siguiente commit.
const User = ({ user }) => {
    return <>
        <p>{user.name}</p>
        <p>{user.age}</p>
    </>
}

export default User;