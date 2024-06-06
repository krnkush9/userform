import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Dashboard.css';



function Dashboard() {
    // useSelector Hook
    // for accessing the store
    const data = useSelector(state => state.userInputValue);

    return (
        <div className="Dashboard">
            <h2>Your Profile</h2>
            {/* it will show the user detail
            when the length of store array will greather 
            than zero otherwise it will show No data availabe */}
            {
                data.length > 0 ? (
                    data.map((val, index) => (
                        <div key={index} className="userData">
                            <p>First name: {val.firstName}</p>
                            <p>Last name: {val.lastName}</p>
                            <p>Email: {val.email}</p>
                            <p>Mobile no.: {val.mobileNumber}</p>
                            <p>Street: {val.street}</p>
                            <p>City: {val.city}</p>
                            <p>State: {val.state}</p>
                            <p>Country: {val.country}</p>
                            <p>Postal code: {val.postalCode}</p>
                        </div>
                    ))) : (<div> <h3>No data availabe</h3></div>)
            }

            <br /> <br />

            {/* Manage your account */}
            <Link to="/update" className="manageYourAccountButton">
                Manage your account
            </Link>

        </div>
    )
}

export default Dashboard;