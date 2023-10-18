import React from 'react'
import './About.css';
import ButtonAppBar from '../HomePage/navbar';


export default function About() {
  
  return (
    <div> 
    <ButtonAppBar/>
       <div className='bodyabout'>
    <div className="label5">
      <div className="text-wrapper">ABOUT US</div>
    </div>
    <div className="label6">
    <p className="about-our-company">
      <span className="text-wrapper">What is</span>
      <span className="span"> Job Plaza ?</span>
    </p>
    <div className="label7">
    <p className="text-wrapper">
      Job Plaza is a digital platform that serves as a valuable resource for individuals seeking
      employment opportunities. This portals act as virtual marketplaces, connecting job seekers with a vast array of
      job listings from numerous employers and industries. Job seekers can explore various job roles, industries, and
      locations, making it easier to find positions that align with their skills, qualifications, and career goals.
      Additionally, it often offer tools and features such as resume creation, application tracking, and email
      notifications, streamlining the job search process. For employers, these portals provide a convenient way to
      reach a broad audience of potential candidates and facilitate the recruitment process. Overall, job searching
      portals play a pivotal role in modern job markets by bridging the gap between job seekers and employers,
      fostering connections, and helping individuals advance their careers
    </p>
  </div>
  </div>
    </div>
    </div>
  )
}
