//import  Link from '@mui/material/Link';
//import { useNavigate} from 'react-router-dom';
import React,{useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const[user,setEmail]=useState('');
  const[pwd,setPassword]=useState('');
  const[error,seterror]=useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate('');
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(user.length===0 && pwd.length===0)
    {
      seterror(true);
    }
        if(user && pwd)
        {
          
          const loginobj={
            user:user,
            pwd:pwd
          }
          //console.log(loginobj);
          alert(JSON.stringify(loginobj));
        }

  };
  const handleFirstButtonClick = () => {
    navigate('/SignUp');
  };

  
  return (
    <div className='body1'>
    <div className="login-form">
    <form  onSubmit={handleSubmit} className='img'>
    <h1>Welcome to Our Website</h1>
    <p>Please log in to access your account.</p>
    <h1>LOGIN</h1>
    <div className="input_container">
    <label>EMAIL-ID   :</label>
    <input type="email1" value={user} placeholder="EMAIL-ID" onChange={e=>setEmail(e.target.value)}/><br/><br/>
    <div>
    {error && user.length===0?
      <label style={{color:'red'}}>Email-Id is required</label>:""} 
    </div>
    </div>
    <div className="input_container">
    <label>PASSWORD: </label>
    <input type={showPassword ? "email1" : "password"} value={pwd} placeholder="PASSWORD" onChange={e => setPassword(e.target.value)} />
    <button type="button" onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? "Hide" : "Show"}
    </button>
    <div>
    {error && pwd.length===0?
      <label style={{color:'red'}}>Password is required</label>:""}
    </div>
    </div>
    <br/>
    <div className="button-container">
    <button  type="submit" className="Submit" >SUBMIT</button>
    </div>
    <h4>DON'T HAVE AN ACCOUNT?</h4>
    <button type="submit" className="login" onClick={handleFirstButtonClick}>SIGNUP</button>
    </form>
    </div>
    </div>
    )
    
}

