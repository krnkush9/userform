import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addData, updateData } from "../Redux/Slices/formData";
import './Update.css';

function Update() {
    // useDispatch Hook
    // it is use to access the function of the slice
    const dispatch = useDispatch();

    // useNavigate Hook
    // For navigate from one component to another component
    const navigate = useNavigate();

    // useSelector Hook
    // for accessing the store
    const data = useSelector(state => state.userInputValue);

    // useState Hook
    // for tracking the user input value
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        street: "",
        city: "",
        state: "",
        country: "",
        postalCode: ""
    })

    // changeHandler funcion
    // if user update any value then it will store the 
    // the value in the userData state variable
    function changeHandler(event) {
        setUserData(prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }

    // registrationSubmitHandler function
    // when the user will submit the form then all data will
    // store in the store
    function registrationSubmitHandler(event) {
        // it will prevent default action of the form
        event.preventDefault();
        // for removing the all value of the store
        dispatch(updateData());
        // for storing the data in the store
        dispatch(addData(userData));
        // for jump to the dashboard page
        navigate("/dashboard");
    }


    return (
        <div className="Update">
            <h2>Update your profile</h2>
            {/* form */}
            <form onSubmit={registrationSubmitHandler}
                className="registrationForm">
                {/* first name input field */}
                <label htmlFor="fName" className="label">
                    First name </label>
                <br></br>
                <input type="text"
                    placeholder="First name"
                    required
                    id="fName"
                    name="firstName"
                    onChange={changeHandler}
                    className="input">
                </input>

                <br></br>
                {/* last name input field */}
                <label htmlFor="lName" className="label"> Last name </label>
                <br></br>
                <input type="text"
                    placeholder="Last name"
                    required
                    id="lName"
                    name="lastName"
                    onChange={changeHandler}
                    className="input">

                </input>

                <br></br>
                {/* email input field */}
                <label htmlFor="email" className="label"> Email address </label>
                <br></br>
                <input type="email"
                    placeholder="Email"
                    required
                    id="email"
                    name="email"
                    onChange={changeHandler}
                    className="input"
                ></input>

                <br></br>
                {/* mobile  number input field */}
                <label htmlFor="mobNumber" className="label"> Mobile number</label>
                <br></br>
                <input type="number"
                    placeholder="Mobile number"
                    required
                    id="mobNumber"
                    name="mobileNumber"
                    onChange={changeHandler}
                    className="input"
                ></input>

                <br></br>
                {/* street input field */}
                <label htmlFor="street" className="label"> Street </label>
                <br></br>
                <input type="text"
                    placeholder="Street"
                    required
                    id="street"
                    name="street"
                    onChange={changeHandler}
                    className="input"
                ></input>

                <br></br>
                {/* city input field */}
                <label htmlFor="city" className="label"> City </label>
                <br></br>
                <input type="text"
                    placeholder="City"
                    required
                    id="city"
                    name="city"
                    onChange={changeHandler}
                    className="input"
                ></input>

                <br></br>
                {/* state input field */}
                <label htmlFor="state" className="label"> State </label>
                <br></br>
                <input type="state"
                    placeholder="State"
                    required
                    id="state"
                    name="state"
                    onChange={changeHandler}
                    className="input"
                ></input>

                <br></br>
                {/* country input field */}
                <label htmlFor="country" className="label">Country</label>
                <br></br>
                <select id="country"
                    name="country"
                    onChange={changeHandler}
                    required
                    className="input">
                    <option>India</option>
                    <option>United State</option>
                    <option>China</option>
                    <option>Mexico</option>
                </select>

                <br></br>
                {/* postal code input field */}
                <label htmlFor="zip" className="label">Postal code </label>
                <br></br>
                <input type="number"
                    placeholder="Postal code"
                    required
                    id="zip"
                    name="postalCode"
                    onChange={changeHandler}
                    className="input"
                ></input>

                <br></br>
                {/* update button */}
                <button className="updateButton">
                    Update
                </button>
            </form>

        </div>
    )
}

export default Update;