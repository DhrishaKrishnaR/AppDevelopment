import React from 'react';
import './Popular.css';

export default function Popular() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="cards-container">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">STEP 1</h4>
                <div className="card-image"></div>
                <p className="card-text">
                <b>Create Your Profile</b><br/><br/>Begin by signing up on the job portal. Fill out your profile with your professional details, including your resume, work history, education, and skills.
                 A complete profile increases your chances of being noticed by recruiters.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">STEP 2</h4>
                <div className="card-image"></div>
                <p className="card-text">
                <b>Search and Set Preferences:</b><br/><br/>Use the portal's search feature to find job listings that match your interests. Don't forget 
                to set up job alerts to receive notifications about new opportunities that align with your preferences. <br/>             
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">STEP 3</h4>
                <div className="card-image"></div>
                <p className="card-text">
                <b>Apply and Network </b> <br/><br/>Apply to jobs that catch your eye by following the application instructions provided in each listing.
                 Some applications will be directly on the portal, while others may redirect you to the company's website.  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
