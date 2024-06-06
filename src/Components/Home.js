import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <div className="Home">
            {/* Login button */}
            <Link to="/login" className="homeButton">
                Log in
            </Link>

            {/* Registration button */}
            <Link to='/registration' className="homeButton">
                Registration
            </Link>
        </div>
    )
}

export default Home;