import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
  const [name, setName] = useState('');
  const [phno, setMobileNum] = useState('');
  const [emailid, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name.length === 0 ||
      phno.length !== 10 ||
      emailid.length === 0 ||
      password.length === 0 ||
      password !== confirmpassword
    ) {
      setError(true);
    } else {
      navigate('/home');
    }
    if (name && phno && emailid && password && confirmpassword && gender) {
      const loginobj = {
        name: name,
        mob: phno,
        mail: emailid,
        pwd: password,
        cpwd: confirmpassword,
        gen: gender,
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
              value={name}
              placeholder='FIRST NAME'
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <div>
              {error && name.length === 0 ? (
                <label style={{ color: 'red' }}>Name is required</label>
              ) : (
                ''
              )}
            </div>
            <br />
            MOBILE NUMBER:<br />
            <input
              type='number'
              value={phno}
              placeholder='MOBILE NUMBER'
              onChange={(e) => setMobileNum(e.target.value)}
            />
            <br />
            <div>
              {error && phno.length < 10 ? (
                <label style={{ color: 'red' }}>Invalid Mobile Number</label>
              ) : (
                ''
              )}
            </div>
            <div>
              {error && phno.length > 10 ? (
                <label style={{ color: 'red' }}>Invalid Mobile Number</label>
              ) : (
                ''
              )}
            </div>
            <br />
            <div>
              <label>
                GENDER :<br />
                <input
                  type='radio'
                  name='gender'
                  value='male'
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />{' '}
                Male
              </label>
              <label>
                <input
                  type='radio'
                  name='gender'
                  value='female'
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                />{' '}
                Female
              </label>
              <label>
                <input
                  type='radio'
                  name='gender'
                  value='other'
                  checked={gender === 'other'}
                  onChange={(e) => setGender(e.target.value)}
                />{' '}
                Other
              </label>
              <br />
              {error && !gender ? (
                <label style={{ color: 'red' }}>Gender is required</label>
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
            CONFIRM PASSWORD:<br />
            <input
              type='password'
              value={confirmpassword}
              placeholder='CONFIRM PASSWORD'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <div>
              {error && password !== confirmpassword ? (
                <label style={{ color: 'red' }}>
                  Password Confirmation Failed
                </label>
              ) : (
                ''
              )}
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
            </div>
          </form>{' '}
        </h4>
      </div>
    </div>
  );
}
