import User from "../components/User";

// ya no llevan props xq accede User.jsx directamente a traves de context
const UserProfilePage = () => {
    return <>
        <h2>User Profile</h2>
        <User />
    </>
}

export default UserProfilePage;