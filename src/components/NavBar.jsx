import WelcomeWidget from "./WelcomeWidget"
import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
    return <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">Profile</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
        {/* la prop user se pasa desde la navbar a el componente */}
        <WelcomeWidget user={user} />
    </div>
}

export default NavBar