import UserContext from "../context/UserContext"

const WelcomeWidget = () => {
    // otra manera d eusar el context
    return <div>
        {/* se pasa el context como consumer y dentro lleva una render props */}
        <UserContext.Consumer>
            {
                (user) => <p>Welcome, {user.name}</p>
            }
        </UserContext.Consumer>
        {/* al usar .Consumer, lo UNICO q tiene acceso a la data es lo q se encuentra DENTRO del mismo!!
        El resto NO.
        Si se quiere q un componente tenga acceso mas "global" a la data, tiene q pasarse
        a traves de useContext, en cambio si solo se necesita en un pedazo chico de un componente,
        es mas conventiente usar el .Consumer */}
    </div>
}

export default WelcomeWidget