import React, { useState } from 'react';
import axios from 'axios';

import './JobForm.css'; 
import { useNavigate } from 'react-router-dom';

export default function JobForm() {
    const navigate=useNavigate();

  const [jobData, setJobData] = useState({
    title: '',
    location: '',
    stipend: '',
    jobtype: '',
    description: '',
  });
  const[error,seterror]=useState(false);  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (
        jobData.title === '' ||
        jobData.location === '' ||
        jobData.stipend === '' ||
        jobData.jobtype === '' ||
        jobData.description === ''
      ) {
        seterror(true);
        return;
      }
      else
      {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
    await axios.post('http://localhost:8080/auth/postjob', jobData) // Replace with your API endpoint
      .then((response) => {
        console.log('Job posted successfully', response.data);
        navigate("/job");

        // Reset the form or redirect to a success page
      })
      .catch((error) => {
        console.error('Error posting job', error);
      });
  };
}

  return (
    <div className='bodyjform'>
      <div className="job-form-container">
      <center><h2>Post a Job</h2></center>
      <form className="job-form" onSubmit={handleSubmit}>
        <label htmlFor="title" className='jflabel'>Title:</label><br/>
        <input className='injob'
          type="text"
          id="title"
          name="title"
          value={jobData.title}
          onChange={handleInputChange}
        />
        <div>
    {error && jobData.title.length===0?
      <label style={{color:'red'}}>Title is required</label>:""} 
    </div>
        <label htmlFor="location" className='jflabel'>Location:</label><br/>
        <input className='injob'
          type="text"
          id="location"
          name="location"
          value={jobData.location}
          onChange={handleInputChange}
        />
        <div>
        {error && jobData.location.length===0?
          <label style={{color:'red'}}>Location is required</label>:""} 
        </div>
        <label htmlFor="stipend" className='jflabel'>Stipend:</label><br/>
        <input className='injob'
          type="text"
          id="stipend"
          name="stipend"
          value={jobData.stipend}
          onChange={handleInputChange}
        />
        <div>
        {error && jobData.stipend.length===0?
          <label style={{color:'red'}}>Stipend is required</label>:""} 
        </div>
        <label htmlFor="jobtype" className='jflabel'>Job Type:</label><br/>
        <input className='injob'
          type="text"
          id="jobtype"
          name="jobtype"
          value={jobData.jobtype}
          onChange={handleInputChange}
        />
        <div>
        {error && jobData.jobtype.length===0?
          <label style={{color:'red'}}>Job Type is required</label>:""} 
        </div>
        <label htmlFor="description" className='jflabel'>Description:</label><br/>
        <textarea  
           className="desc"
          name="description"
          value={jobData.description}
          onChange={handleInputChange}
        />
        <div>
        {error && jobData.description.length===0?
          <label style={{color:'red'}}>Description is required</label>:""} 
        </div>
        <center><button className="post-job-button" type="submit">Post Job</button></center>
      </form>
    </div>
    </div>
  );
}
