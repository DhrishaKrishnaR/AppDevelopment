import React, { useEffect, useState } from 'react';
import './Job.css';
import ButtonAppBar from '../HomePage/navbar';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

export default function Job() {
  const [animateHeading, setAnimateHeading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [initialJobs, setInitialJobs] = useState([]); // Store initial jobs separately

  const navigate=useNavigate();


  // Function to fetch job data from the backend
  const fetchJobData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth/getjob'); // Replace with your API endpoint
      setJobs(response.data); // Update the jobs state with the fetched data
      setInitialJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setAnimateHeading(true);
    fetchJobData(); // Fetch job data when the component mounts
  }, []);

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);
  
    if (newSearchTerm === '') {
      setJobs(initialJobs);
    } else {
      const filteredJobs = initialJobs.filter((job) =>
        job.title.toLowerCase().includes(newSearchTerm) ||
        job.location.toLowerCase().includes(newSearchTerm)
      );
      setJobs(filteredJobs);
    }
  };
  const handleApply = (job) => {
    // Retrieve existing applied jobs from localStorage
    const existingAppliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
  
    // Add the new job to the array
    existingAppliedJobs.push(job);
  
    // Store the updated array in localStorage
    localStorage.setItem('appliedJobs', JSON.stringify(existingAppliedJobs));
  
    navigate('/apply');
  }
  
  return (
    <div className="bodyj">
      <ButtonAppBar />
      <h2 className={`job-heading ${animateHeading ? 'animate' : ''}`}>..Find your Job without any hassle..</h2>
      <center><div className="search-wrapper">
        <label htmlFor="search">Search Jobs</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title or location"
          className="search-input"
        />
      </div></center>
      <div className="container">
        <div className="row">
          <div className="job-card-container">
            {jobs.map((job, index) => (
              <div className="job-card" key={index}>
                <div className="card-content">
                  <h4 className="job-title">{job.title}</h4>
                  <h5 className="company">{job.location}</h5>
                  <h5 className="company">{job.stipend}</h5>
                  <h5 className="company">{job.description}</h5>
                  <h5 className="company">Verified✔.{job.jobtype}</h5>
                </div>
                <center><button className="btn-apply" onClick={() => handleApply(job)}>
                  Apply
                </button></center>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="copyright">© Job Plaza  {new Date().getFullYear()} All Rights Reserved</p>
    </div>
  );
}
