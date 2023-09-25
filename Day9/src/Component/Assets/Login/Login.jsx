
import React,{useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/userSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const[username,setUser]=useState('');
  const[pwd,setPassword]=useState('');
  const[error,seterror]=useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch =useDispatch();  
  const navigate=useNavigate('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if(username.length===0 || pwd.length===0)
    {
      seterror(true);
    }
    else if (username && pwd) {
      dispatch(login(username));
      navigate("/");
    }
    
        if(username && pwd)
        {
          
          const loginobj={
            user:username,
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
    <center><h1>Welcome to Our Website</h1>
    <p>Please log in to access your account.</p>
   <h1>LOGIN</h1></center>
    <div className="input_container">
    <label>USERNAME  :</label>
    <input type="text" id="user" value={username} placeholder="USERNAME" onChange={e=>setUser(e.target.value)}/><br/>
    <div>
    {error && username.length===0?
      <label style={{color:'red'}}>Email-Id is required</label>:""} 
    </div>
    <br/>
    </div>
    <div className="input_container">
    <label>PASSWORD: </label>

    <input type={showPassword ? "email" : "password"} id="pwd" value={pwd} placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)} />
    <button type="button" onClick={() => setShowPassword(!showPassword)}>
    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </button>
    <div>
    {error && pwd.length===0?
      <label style={{color:'red'}}>Password is required</label>:""}
    </div>
    </div>
    <br/><center>
    <div className="button-container">
    <button  type="submit" className="Submit"  >SUBMIT</button>
    </div>
    <h4>DON'T HAVE AN ACCOUNT?</h4>
    <button type="submit" className="login" onClick={handleFirstButtonClick}>SIGNUP</button>
    </center></form>
    </div>
    </div>
    )
    
}

