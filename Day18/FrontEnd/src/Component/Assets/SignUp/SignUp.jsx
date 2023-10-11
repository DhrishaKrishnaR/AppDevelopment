import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';

export default function SignUp() {
  const [username, setName] = useState('');
  const [mobileno, setMobileNum] = useState('');
  const [emailid, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = { username, mobileno, emailid, password};
    if (
      username.length === 0 ||
      mobileno.length !== 10 ||
      emailid.length === 0 ||
      password.length === 0 
    ) {
      setError(true);
    } 
    else {
    
        await axios.post('http://localhost:8080/auth/register', data)
          .then(() => {
            console.log(data);
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
  
      
    }
    if (username && mobileno && emailid && password  ) {
      const loginobj = {
        name: username,
        mob: mobileno,
        mail: emailid,
        pwd: password,
      };
      
      console.log(loginobj);
      alert(JSON.stringify(loginobj));
    }
  };

  const handleSecondButtonClick = () => {
    navigate('/Login');
  };

  return (
    <div className='body2'>
      <div className='signup-form'>
        <h4>
          <form onSubmit={handleSubmit}>
            <h3>
              <center>CREATE ACCOUNT</center>
            </h3>
            NAME :<br />{' '}
            <input
              type='text'
              value={username}
              placeholder='FIRST NAME'
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <div>
              {error && username.length === 0 ? (
                <label style={{ color: 'red' }}>Name is required</label>
              ) : (
                ''
              )}
            </div>
            <br />
            MOBILE NUMBER:<br />
            <input
              type='number'
              value={mobileno}
              placeholder='MOBILE NUMBER'
              onChange={(e) => setMobileNum(e.target.value)}
            />
            <br />
            <div>
              {error && mobileno.length < 10 ? (
                <label style={{ color: 'red' }}>Invalid Mobile Number</label>
              ) : (
                ''
              )}
            </div>
            <div>
              {error && mobileno.length > 10 ? (
                <label style={{ color: 'red' }}>Invalid Mobile Number</label>
              ) : (
                ''
              )}
            </div>
            <br />
            E-MAIL ID:<br />
            <input
              type='email'
              value={emailid}
              placeholder='E-MAIL ID'
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <div>
              {error && emailid.length === 0 ? (
                <label style={{ color: 'red' }}>E-mail ID is required</label>
              ) : (
                ''
              )}
            </div>
            <br />
            PASSWORD:<br />
            <input
              type='password'
              value={password}
              placeholder='PASSWORD'
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div>
              {error && password.length === 0 ? (
                <label style={{ color: 'red' }}>Password is required</label>
              ) : (
                ''
              )}
            </div>
            
              <br />
              <center>
                <div className='button-container'>
                  <button type='submit' className='submit2'>
                    SUBMIT
                  </button>
                </div>
                <h4>ALREADY HAVE AN ACCOUNT?</h4>
                <button
                  type='submit'
                  className='submit2'
                  onClick={handleSecondButtonClick}
                >
                  LOGIN
                </button>
              </center>
          </form>{' '}
        </h4>
      </div>
    </div>
  );
}
