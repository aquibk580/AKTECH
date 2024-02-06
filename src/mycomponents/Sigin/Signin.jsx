import React from 'react'
import './Signin.css'
import google from '../Images/Google-Signin.png'
import { useNavigate } from 'react-router-dom'

export const Signin = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="Sigin-contain flex flex-col">
    <span className="back-button white" onClick={()=> navigate("/")}><i class="fa-solid fa-2x fa-arrow-left"></i><span className='go-back-text f'>Go back</span></span>
        <div className="boxx">
    <span className="borderLine"></span>
    <form action="">
    <span className="back-button-mobile white" onClick={()=> navigate("/")}><i class="fa-solid fa-2x fa-arrow-left"></i></span>
        <h2>Sign in</h2>
        <div className="inputbox">
            <input type="text" required="required"/>
            <span>Username</span>
            <i></i>
        </div>
        <div className="inputbox">
            <input name="password" id="password" type="password" required="required"/>
            <span>Password</span>
            <i></i>
        </div>
        <div className="Links">
            <a href="/">Forgot Password</a>
            <a href="/">Signup</a>
        </div>
        <input name='submit' id='submit' type="submit" value="Log in"/>
        <p><span className='inline-line'></span> OR LOGIN WITH <span className='inline-line'></span></p>
        <div className='google-signin flex flex-row'>
            <img src={google} alt="" />
            <span>Google</span>
        </div>
        <div className="create-account white flex flex-col">
            <span>No Account Yet?</span><br />
            <a href="/" className='white'>Create Account</a>
        </div>
    </form>
</div>
    </div>
    </>
  )
}
