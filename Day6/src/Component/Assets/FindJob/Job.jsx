import React, { useEffect, useState } from 'react';
import './Job.css';
import ButtonAppBar from '../HomePage/navbar';

export default function Job() {
  const initialJobs = [
    {
      title: 'Web Developer',
      location: 'Bangalore, Karnataka',
      stipend: '₹35,000/month',
      jobtype:'Full-Time',
      description:'Join our team as a full-time web developer to work on exciting web projects, collaborate with cross-functional teams, and contribute to web development initiatives.'
    },
    {
      title: ' UX/UI Designer',
      location: ' Pune, Maharashtra',
      stipend: '₹18,000/month',
      jobtype:' Internship',
      description:'As a UX/UI design intern, you will work on real-world design projects, create user-friendly interfaces, and gain valuable design experience.'
    },
    {
      title: 'Data Analyst',
      location: 'Hyderabad, Telangana',
      stipend: '₹25,000/month',
      jobtype:' Internship',
      description:'Join our data analytics team as an intern, analyze data sets, and assist in generating insights to support data-driven decision-making.'
    },
    {
      title: 'Software Engineer',
      location: ' Chennai, Tamil Nadu',
      stipend: '₹40,000/month',
      jobtype:'Full-Time',
      description:' We are hiring software engineers to develop software solutions, work on challenging projects, and participate in software development activities.'
    },
    {
      title: 'Marketing Specialist',
      location: 'Mumbai, Maharashtra',
      stipend: ' ₹20,000/month',
      jobtype:' Internship',
      description:'Join our marketing team as an intern to assist in marketing campaigns, social media management, and market research.'
    },
    {
      title: 'Graphic Designer',
      location: 'Delhi, NCR',
      stipend: ' ₹30,000/month',
      jobtype:'Full-Time',
      description:' We are looking for a creative graphic designer to design visual content for various marketing materials and branding projects.'
    },
    {
      title: 'Content Writer',
      location: 'Jaipur, Rajasthan',
      stipend: '₹15,000/month',  
      jobtype:' Internship',
      description:'Join us as a content writer intern to produce high-quality content for blogs, websites, and social media platforms.'
    },
    {
      title: 'Graphic Designer',
      location: ' Kolkata, West Bengal',
      stipend: '₹28,000/month',
      jobtype:' Internship',
      description:'We are looking for a creative and skilled Graphic Designer to join our dynamic team in Bangalore. As a Graphic Designer, you will play a crucial role in shaping our brand identity and visual communication strategies.'
    },
    {
      title: ' Software Engineer',
      location: ' Gurugram, Haryana',
      stipend: '₹50,000/month',
      jobtype:'Full-Time',
      description:'We are seeking a highly skilled Software Engineer to join our Pune-based development team. As a Software Engineer, you will be responsible for designing, developing, and maintaining software applications that meet our clients needs'
    },
    {
      title: 'Web Developer',
      location: 'Bangalore, Karnataka',
      stipend: '₹35,000/month',
      jobtype:'Full-Time',
      description:'We are looking for a talented Web Developer to join our Hyderabad-based development team. As a Web Developer, you will be responsible for designing and building responsive and user-friendly web applications.'
    }
  ];
  const [animateHeading, setAnimateHeading] = useState(false);
  useEffect(() => {
    setAnimateHeading(true);
  }, []);
  const [jobs, setJobs] = useState(initialJobs);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    const filteredJobs = initialJobs.filter((job) =>
      job.title.toLowerCase().includes(newSearchTerm) ||
      job.location.toLowerCase().includes(newSearchTerm)
    );

    setJobs(filteredJobs);
  };

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
                <a href="/apply" className="btn-apply">
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="copyright">© Job Plaza  {new Date().getFullYear()} All Rights Reserved</p>

    </div>
  );
}
