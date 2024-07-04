import './signin.css';
import { Link } from "react-router-dom"

const SignIn = ()=>{
    return(
        <>
        <div className=''>
            <div className='links'>
            <div className="signlink"><Link className='link'>Sign In</Link></div>
            <div className="signlink"><Link className="link">Join In</Link></div>
            </div>
            <div><button  className="sign">Continue with Google</button></div>
            <div><button  className="sign">Continue with Facebook</button></div>
            <div><p className="conn">Or Connect With</p></div>
            <div><input className='items' placeholder="Email" type="text"/></div>
            <div><input className="items" placeholder="password" type="password"/></div>
            <div className='check'><input className='checkin' type="checkbox" id="remember"/><label className='check-label' for="remember">Remember me</label></div>
            <div className='check'><Link className='link'>Forgot Password?</Link></div>
            <div><button className='sign'>Continue</button></div>
        </div>
        </>
    )
}


export default SignIn;