import React, { useEffect, useState } from 'react';
import './Apply.css'; // Import the CSS file
import ButtonAppBar from '../HomePage/navbar';

export default function AppliedJob() {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    // Retrieve the list of applied jobs from localStorage
    const existingAppliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];
    setAppliedJobs(existingAppliedJobs);
  }, []);

  return (
    <div>
    <ButtonAppBar/>
    <div className="applied-job-container">
      {appliedJobs.length > 0 ? (
        <div>
        <h1>Jobs that you've applied ({appliedJobs.length} jobs):</h1>
            {appliedJobs.map((job, index) => (
            <div key={index} className="job-details">
            <p><strong>Job {index + 1}:</strong></p>
              <p><strong>Title:</strong> {job.title}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Stipend:</strong> {job.stipend}</p>
              <p><strong>Description:</strong> {job.description}</p>
              <p><strong>Job Type:</strong> {job.jobtype}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No applied job details available.</p>
      )}
      <br/>
      <center><a href="/job" className="go-back-button">
        Go Back
      </a></center>
    </div>
    </div>
  );
}
