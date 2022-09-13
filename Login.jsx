import React from "react";
import { useState } from "react";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'


const Login = () => {
    const [toggleState, setToggleState] = useState(1);
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        }
        else {
            setIcon(eyeOff);
            setType('password');
        }
    }

    const callElements = () => {
        const userName = document.getElementById("fname").value;
        const passWord = document.getElementById("Password").value;

        const loginDets = {User_name:userName, Password:passWord};
        console.log(loginDets)

    }

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (<div>
        <div className="bloc-tabs">
            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                Login
            </button>
            <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                Sign Up
            </button>

        </div>

        <div className="content-tabs">
            <div className={toggleState === 1 ? "content  active-content" : "content"}>

                <form>
                    <input type="text" id="fname" name="fname" placeholder="Username" className="username" autoComplete="off" /><br />
                    <div className="username"><input type={type} id="Password" name="Password" placeholder="Password" autoComplete="off" className="password-area" /><span onClick={handleToggle} style={{ color: '#00c0f5' }}><Icon icon={icon} size={20} /></span></div><br />
                    <button name="field_name" value="submitted_value" className="login-submit" >Sign In</button>

                </form>

                <div className="forgot-pwd">
                    <div className="remember">
                        <input type="checkbox" id="remember" name="remember-me" value="" />
                        <span className="remember-me" >Remember me</span>
                    </div>

                    <div className="Forgot-password">Forgot password?</div>
                </div>


                <div className="or-login-with">
                    <p>or login with</p>
                </div>
                <div className="logos">
                    <div className="facebook">
                        <img src="images/f-logo-rgb-blue-1024.svg" alt="fb-img" />
                    </div>
                    <div className="google">
                        <img src="images/google.svg" alt="google-img" />
                    </div>
                    <div className="facebook">
                        <img src="images/twitter.svg" alt="twit-img" />
                    </div>
                </div>

                <div className="acco-para" > <p>Don’t you have an account? <span className="Forgot-password">Sign Up</span></p></div>

            </div>

            <div
                className={toggleState === 2 ? "content  active-content" : "content"}
            >

            </div>
        </div>
    </div>
    );
}

export default Login;