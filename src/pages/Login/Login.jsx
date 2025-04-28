import React ,{useState}from "react";
import "./Login.css";
import logo from "../../assets/netflix-logo.png";
import{login,signUp} from '../../firebase'
import loader from '../../assets/loading_spinner.gif'


const Login = () => {
  const [signState, setSignState] = useState("Sign In")
  const [user, setUser] = useState({name:'',email:'',password:''})
  const [loading, setLoading] = useState(false)

  const handleChange=(e)=>{
    setUser(user => ({...user, [e.target.name]:e.target.value}))
  }
  
  const user_auth = async(e) => {
    e.preventDefault();
    const { name, email, password } = user
    setLoading(true)
     if(signState === 'Sign In'){
      await login (email,password)
     }
     else{
      await signUp(name,email,password)
     }
     setLoading(false) 
    }

  return (
    loading?<div className="logo-spinner">
      <img src={loader} alt=""/>
    </div>:
    <div className="login">
      <div className="login-section">
      <img src={logo} alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState === 'Sign Up' && <input type="text"  name="name" value={user.name} onChange={handleChange}  placeholder="Name"  required/>}
          
          <input type="email" name='email' value={user.email} onChange={handleChange} placeholder="Email or mobile number" required />
          <input type="password"  name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
          <button className="btn-signup" onClick={user_auth} type="submit" disabled={loading}>{signState}</button>
          
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
              <p>?Need Help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === 'Sign In' && <p>New to Netflix? <span onClick={()=> setSignState('Sign Up')}>Sign Up Now</span></p> }
          {signState === 'Sign Up' && <p>Already have an account? <span onClick={()=> setSignState('Sign In')}>Sign In </span></p>}
          
        </div>
      </div>
      </div>

    <div className="foot-section">
       <p>Questions? Call 000-000-000-000 </p>
       <ul>
          <li>FAQ</li>
          <li>Help Centre</li>
          <li>Terms of use</li>
          <li>Privacy</li>
          <li>Cookie Preference</li>
          <li>Corporate Information</li>  
        </ul>
       <div className="select-wrapper">
          <svg className="select-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
          <path fill="currentColor" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" clipRule="evenodd" fillRule="evenodd" />
          </svg>
          <select>
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>हिन्दी</option>
          </select>
       </div>
    </div>
      
  </div>
  );
};

export default Login;
