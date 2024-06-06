import { Link, useNavigate } from "react-router-dom";
import './Login.css'

function Login({ setLoggedIn }) {
    // useNavigate Hook
    // For navigate from one component to another component
    const navigate = useNavigate();

    // login form submit handler funciton
    function loginSubmitHandler(event) {
        event.preventDefault();
        setLoggedIn(true);
        navigate("/dashboard");
    }

    return (
        <div className="Login">

            {/* login heading */}
            <h2>Login</h2>

            {/* login form */}
            <form onSubmit={loginSubmitHandler}>

                {/* input field */}
                <label className="email">
                    <p>Email <span className="star">*</span></p>
                    <input
                        required
                        type="email"
                        name="emailLoginValue"
                        placeholder="Enter email"
                        className="input"
                    ></input>
                </label>

                {/* password field */}
                <label className="password">
                    <p>Password <span className="star">*</span></p>
                    <input
                        required
                        type="password"
                        name="passwordValue"
                        placeholder="Enter password"
                        className="input"
                    ></input>
                </label>

                <br /><br />
                {/* Login button */}
                <button className="loginButton">
                    Login
                </button>

            </form>

        </div>
    )
}

export default Login;