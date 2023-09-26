import React, { useState } from 'react'
import './Apply.css';
import { useNavigate } from 'react-router-dom';
import ButtonAppBar from '../HomePage/navbar';


export default function Apply() {
    const navigate=useNavigate();
     
    const[name,setName]=useState('');
    const[mail,setMail]=useState('');
    const[num,setNum]=useState('');
    const[grad,setGrad]=useState('');
    const[sal,setSal]=useState('');
    const[exp,setExp]=useState('');
    const[edu,setEdu]=useState('');
    const[link,setLink]=useState('');
    const[link2,setLink2]=useState('');
  const[error,seterror]=useState(false);  

  const jobpage = (event) => {
    event.preventDefault();
    if(name.length===0 || mail.length===0 ||  link.length===0 || link2.length===0 || num.length===0 || grad.length===0 || sal.length===0 || exp.length===0 || edu === 'Select an option')
    {
      seterror(true);
    }
    else if (name && mail && num && grad && sal && link && link2) {
      navigate("/done");
    }
  };
  return (
    <div className='bodya'>
    <ButtonAppBar/>
    <div className="survey-container">

  <h1 className="ah1">Job form</h1>

  <p id="description">Fill in to apply</p>

  <form id="survey-form">
    <p>Personal Information:</p>
    <label id="name-label" className="row-label" htmlFor="name">Name:</label>
    <input id="name" className="row-input" type="text" placeholder="Enter your name" value={name}  onChange={e=>setName(e.target.value)}required/>
    <div>
    {error && name.length===0?
      <label style={{color:'red'}}>Name is required</label>:""} 
    </div>
    <label id="email-label" className="row-label" htmlFor="email">Email:</label>
    <input id="email" className="row-input" type="email" placeholder="Enter your email" value={mail} onChange={e=>setMail(e.target.value)} required/>
    <div>
    {error && mail.length===0?
      <label style={{color:'red'}}>Email-Id is required</label>:""} 
    </div>
    <label id="number-label" className="row-label" htmlFor="number">Moblile Number:</label>
    <input id="number" className="row-input" type="number" placeholder="Enter mobile number" value={num} onChange={e=>setNum(e.target.value)} min="0" max="10"/>
    <div>
    {error && num.length===0?
      <label style={{color:'red'}}>Mobile Number is required</label>:""} 
    </div>
    <p>Education:</p>
    <label className="row-label" htmlFor="dropdown">Highest Level of education:</label>
    <select id="dropdown" name="edu"  className="row-input" required defaultValue="Select an option" onChange={e=>setEdu(e.target.value)}>
    <option value>Select an option</option>
    <option value="primary">Bachelor's degree</option>
    <option value="secondary">Master's degree</option>
    <option value="higher">Higher education</option>
    <option value="na">None of the above</option>
    </select>
    <div>
    {error && edu === 'Select an option'?
      <label style={{color:'red'}}> Required</label>:""} 
    </div>
    <label id="number-label" className="row-label" htmlFor="number">Graduation Year:</label>
    <input id="number" className="row-input" type="number" placeholder="Enter year of graduation" value={grad} onChange={e=>setGrad(e.target.value)} min="0" max="10"/>
    <div>
    {error && grad.length===0?
      <label style={{color:'red'}}>Graduation Year is required</label>:""} 
    </div>
    
    
    <p>Salary Expectation:</p>
    <p className="row-label">Expected salary:</p>
    <input id="name" className="row-input" type="text" placeholder="Enter your salary" value={sal}  onChange={e=>setSal(e.target.value)} required/>
    <div>
    {error && sal.length===0?
      <label style={{color:'red'}}>Expected Salary is required</label>:""} 
    </div>
    <p>Work Experience:</p>
    
    <label id="number-label" className="row-label" htmlFor="number">Years of experience (optional):</label>
    <input id="number" className="row-input" type="number" placeholder="Enter number of years of experience" value={exp} onChange={e=>setExp(e.target.value)}/>
    <div>
    {error && exp.length===0?
      <label style={{color:'red'}}>Years of Experience is required</label>:""} 
    </div>
    <p>Links:</p>
    <label id="name-label" className="row-label" htmlFor="name">Github:</label>
    <input id="name" className="row-input" type="text" placeholder="Github link" value={link}  onChange={e=>setLink(e.target.value)}required/>
    <div>
    {error && link.length===0?
      <label style={{color:'red'}}>Link required</label>:""} 
      </div>
      <label id="name-label" className="row-label" htmlFor="name">LinkedIn:</label>
    <input id="name" className="row-input" type="text" placeholder="LinkedIn link" value={link2}  onChange={e=>setLink2(e.target.value)}required/>
    <div>
    {error && link2.length===0?
      <label style={{color:'red'}}>Link required</label>:""} 
    </div><br/>
    <label className="row-label" htmlFor="comments">Tell us why we should hire you :</label>
    <textarea id="comments" placeholder="Enter other informations here..."></textarea><br/><br/><br/>
    <center><button className="submita" onClick={jobpage} type="submit" >Submit</button></center>
    
    </form>
    
    </div>
    <p className="copyright">© Job Plaza  {new Date().getFullYear()} All Rights Reserved</p>
    </div>
  )
}
