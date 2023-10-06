import React from 'react'
import './FAQ.css';
import ButtonAppBar from './navbar';

export default function FAQ() {
  const handleFAQClick = (event) => {
    const target = event.currentTarget;
    const container = target.closest(".topic");
    const answer = container.querySelector(".answer");
    const trigger = container.querySelector(".faq-t");

    answer.style.display = answer.style.display === "block" ? "none" : "block";
    trigger.classList.toggle("faq-o");
    container.classList.toggle("expanded");
  };
  
  return (
    <div>
    <ButtonAppBar/>
    <div className="bodyf">
  <h1>Frequently Asked Questions<br/>About Our Portal</h1><br/>
  <div className='faq'>
  <div className="topic">
    <div className="open" onClick={handleFAQClick}>
    
      <h2 className="question">1. How do I create an account on the job portal?</h2>
      <span className="faq-t"></span>
    </div>
    <p className="answer">To create an account, visit our homepage and click on the "Sign Up" or "Register" button. Fill in your details, including your name, email address, and password. Once you submit the information, your account will be created.</p>
  </div>
  <div className="topic">
    <div className="open" onClick={handleFAQClick}>
      <h2 className="question">2. Can I search for jobs without creating an account?
      </h2><span className="faq-t"></span>
    </div>
    <p className="answer">Yes, you can browse job listings without an account. However, to apply for jobs, save your favorite listings, or receive personalized job recommendations, it's recommended to create an account.</p>
  </div>
  <div className="topic">
    <div className="open" onClick={handleFAQClick}>
      <h2 className="question">3. How do I upload my resume?
      </h2><span class="faq-t"></span>
    </div>
    <p className="answer">After logging into your account, go to your profile settings. You'll find an option to upload your resume there. Follow the instructions to upload your resume file.</p>
  </div>
  <div className="topic">
    <div className="open" onClick={handleFAQClick}>
      <h2 className="question">4. Can I set up job alerts for specific criteria?
      </h2><span class="faq-t"></span>
    </div>
    <p className="answer">Yes, you can set up job alerts. After conducting a search with your desired criteria, you'll see an option to "Create Job Alert." Enter your email address and preferences, and you'll receive email notifications when new jobs match your criteria.</p>
  </div>
  <div className="topic">
    <div className="open" onClick={handleFAQClick}>
      <h2 class="question">5. How do I apply for a job through the portal?
      </h2><span class="faq-t"></span>
    </div>
    <p class="answer"> To apply for a job, click on the job listing you're interested in. You'll find an "Apply Now" or "Submit Application" button within the job description. Follow the application instructions provided by the employer.</p>
  </div>
  <div className="topic">
    <div className="open" onClick={handleFAQClick}>
      <h2 class="question">6. How can I contact the employer for additional information?
      </h2><span class="faq-t"></span>
    </div>
    <p className="answer">  On each job listing, you'll find the contact information for the employer, such as an email address or phone number. Reach out to them directly for inquiries about the job.</p>
  </div>
  <div className="topic">
    <div className="open" onClick={handleFAQClick}>
      <h2 class="question">7. Is my personal information safe on the portal?
      </h2><span class="faq-t"></span>
    </div>
    <p class="answer"> We take your privacy seriously. Your personal information is protected and not shared with third parties without your consent. Please review our privacy policy for more details.</p>
  </div>
  <div className="topic">
    <div className="open" onClick={handleFAQClick}>
      <h2 class="question">8. Can I set up job alerts for specific criteria?
      </h2><span class="faq-t"></span>
    </div>
    <p class="answer"> Yes, you can set up job alerts. After conducting a search with your desired criteria, you'll see an option to "Create Job Alert." Enter your email address and preferences, and you'll receive email notifications when new jobs match your criteria.</p>
  </div>
  </div>
  </div>
  <p className="copyright">© Job Plaza  {new Date().getFullYear()} All Rights Reserved</p>
</div>
  )
}
