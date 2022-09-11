import React from "react";
import { useState } from "react";

    


export const Modal = ({setModal}) => {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
    return (
       
        <div className='backshadow'>
            <div className='custom-modal'>
                <div className='delete-icon' onClick={()=>setModal(false)}><img src="images/shape.svg" alt="cross"/></div>

                <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Login
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Sign Up
        </button>
      
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
      
          <form>
          <input type="text" id="fname" name="fname" value="" placeholder="Username" className="username"/><br/>
        
          <input type="text" id="lname" name="lname" value="" placeholder="Password" className="username"/><br/>

          <button name="field_name" value="submitted_value" className="login-submit" >Sign In</button>
          {/* <input type="submit" value="" placeholder="Signin" className="login-submit" /> */}
          </form>

          <div className="forgot-pwd">
            <div className="remember">
                  <input type="checkbox" id="remember" name="remember-me" value="" />
                  <label for="remember">Remember me</label>  
            </div>

            <div className="Forgot-password">Forgot password?</div>
          </div>


          <div className="or-login-with">
              <p>or login with</p>
          </div>
          <div className="logos">
            <div className="facebook">
                <img src="images/f-logo-rgb-blue-1024.svg" alt="fb-img"/>
            </div>
            <div className="google">
                <img src="images/google.svg" alt="google-img"/>
            </div>
            <div className="facebook">
                <img src="images/twitter.svg" alt="twit-img"/>
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
        </div>
        );
    }