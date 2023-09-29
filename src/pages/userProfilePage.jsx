import User from "../components/User";

// esta prop es para leer la info de user desde app y pasarsela a User
const UserProfilePage = ({ user }) => {
    return <>
        <h2>User Profile</h2>
        {/* User recibe como props la info de user para poder mostrar lo q debe mostrar */}
        <User user={user} />
    </>
}

export default UserProfilePage;