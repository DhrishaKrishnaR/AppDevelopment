import React, { useState } from 'react'
import './Apply.css';
import { useNavigate } from 'react-router-dom';
import ButtonAppBar from '../HomePage/navbar';
import axios from 'axios';


export default function Apply() {
    const navigate=useNavigate();
     
    const[name,setName]=useState('');
    const[mail,setMail]=useState('');
    const[mobilenum,setNum]=useState('');
    const[graduationYear,setGrad]=useState('');
    const[expectedSalary,setSal]=useState('');
    const[yearsOfExperience,setExp]=useState('');
    const[education,setEdu]=useState('');
    const[githubLink,setLink]=useState('');
    const[linkedinLink,setLink2]=useState('');
  const[error,seterror]=useState(false);  

  const jobpage = async(event) => {
    event.preventDefault();
    
    const data = { name,mail ,mobilenum,graduationYear, expectedSalary, yearsOfExperience,education,githubLink,linkedinLink};
    if(name.length===0 || mail.length===0 ||  githubLink.length===0 || linkedinLink.length===0 || mobilenum.length===0 || graduationYear.length===0 || expectedSalary.length===0 || yearsOfExperience.length===0 || education === 'Select an option')
    {
      seterror(true);
    }
    else if (name && mail && mobilenum && graduationYear && expectedSalary && githubLink && linkedinLink) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
      const response = await axios.post('http://localhost:8080/auth/postdetail', data);
      console.log(response.data);
      
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
    <input id="number" className="row-input" type="number" placeholder="Enter mobile number" value={mobilenum} onChange={e=>setNum(e.target.value)} min="0" max="10"/>
    <div>
    {error && mobilenum.length===0?
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
    {error && education === 'Select an option'?
      <label style={{color:'red'}}> Required</label>:""} 
    </div>
    <label id="number-label" className="row-label" htmlFor="number">Graduation Year:</label>
    <input id="number" className="row-input" type="number" placeholder="Enter year of graduation" value={graduationYear} onChange={e=>setGrad(e.target.value)} min="0" max="10"/>
    <div>
    {error && graduationYear.length===0?
      <label style={{color:'red'}}>Graduation Year is required</label>:""} 
    </div>
    
    
    <p>Salary Expectation:</p>
    <p className="row-label">Expected salary:</p>
    <input id="name" className="row-input" type="text" placeholder="Enter your salary" value={expectedSalary}  onChange={e=>setSal(e.target.value)} required/>
    <div>
    {error && expectedSalary.length===0?
      <label style={{color:'red'}}>Expected Salary is required</label>:""} 
    </div>
    <p>Work Experience:</p>
    
    <label id="number-label" className="row-label" htmlFor="number">Years of experience (optional):</label>
    <input id="number" className="row-input" type="number" placeholder="Enter number of years of experience" value={yearsOfExperience} onChange={e=>setExp(e.target.value)}/>
    <div>
    {error && yearsOfExperience.length===0?
      <label style={{color:'red'}}>Years of Experience is required</label>:""} 
    </div>
    <p>Links:</p>
    <label id="name-label" className="row-label" htmlFor="name">Github:</label>
    <input id="name" className="row-input" type="text" placeholder="Github link" value={githubLink}  onChange={e=>setLink(e.target.value)}required/>
    <div>
    {error && githubLink.length===0?
      <label style={{color:'red'}}>Link required</label>:""} 
      </div>
      <label id="name-label" className="row-label" htmlFor="name">LinkedIn:</label>
    <input id="name" className="row-input" type="text" placeholder="LinkedIn link" value={linkedinLink}  onChange={e=>setLink2(e.target.value)}required/>
    <div>
    {error && linkedinLink.length===0?
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
