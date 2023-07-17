import React, {useState} from 'react';
import image from '../image/Abstraction.png'
import flogo from '../image/facebook 1.png'
import { FaGoogle } from "react-icons/fa";


const Signup = () => {

    let [user, setUser] = useState({name:"", email:"", password:"", confirmPassword:""})
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    console.log("user", user)

    function validateForm(event){
        event.preventDefault()
        if(user.name==""){
            setSuccess("")
            return setError("Name field is empty");
        }
        else if(user.email==""){
            setSuccess("")
            return setError("Email field is empty");
        }
        else if(user.password==""){
            setSuccess("")
            return setError("Password field is empty")
        }
        else if(user.confirmPassword!==user.password){
            setSuccess("")
            return setError("Password is not matching");
        }

        setSuccess("Successfully Created!")
        setError("")

    }

    return (
        <div className='signup-page'>
            <div className="left-side">
                <div className='title-text'>
                    <p>Find 3D Objects, Mockups</p>
                    <p>and Illustration here</p>
                </div>
                <div className="image-div">
                    <img src={image} alt="img" />
                </div>
            </div>
            <div className="form-container">
                <div className="form-div">
                    <h1>Create Account</h1>
                    <div className="social-app-link">
                        <span className="google-link">
                            <span><FaGoogle/></span>
                            <p>Sign up with Google</p>
                        </span>
                        <span className="facebook-link">
                            <span><img src={flogo} alt="img" /></span>
                            <p>Sign up with Facebook</p>
                        </span>
                    </div>
                    <p id='or'>- OR -</p>
                    <form onSubmit={validateForm}>
                        <input type="text" id='name-input' placeholder='Full Name' onChange={(event) => setUser({...user, name: event.target.value})}/>
                        <input type="email" id='email-input' placeholder='Email Address' onChange={(event) => setUser({...user, email: event.target.value})}/>
                        <input type="password" id='password-input' placeholder='Password' onChange={(event) => setUser({...user, password: event.target.value})}/>
                        <input type="password" id='confirmPass-input' placeholder='Confirm Password' onChange={(event) => setUser({...user, confirmPassword: event.target.value})}/>
                        <button type='submit' id='submit-btn'>Create Accont</button>
                        {
                            error && <p style={{color: "#FE597B"}}>{error}</p>
                        }
                        {
                            success && <p style={{color: "#7CD2D7"}}>{success}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;