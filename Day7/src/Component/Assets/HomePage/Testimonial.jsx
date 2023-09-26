import React from 'react'
import './Home.css';

export default function FeedBack() {
  return (
      <div className="main5">
      <h2>What Our Customers feel <br/>about our website:</h2>
      <div className="testimonials">
      <div className="testimonials-inner testimonial-transition">
      <div className="testimonial">
        <div className="testimonial-photo">
          <div className="photo-background"></div>
          <div className="photo-author"></div>
        </div>
        <div className="testimonial-text">
          <p>"I can't express how grateful I am for this job searching portal. It made my job hunt so much easier and efficient.
           The user-friendly interface allowed me to filter and search for jobs that matched my skills and preferences. 
           Within a few weeks of using the portal,
           I found the perfect job that aligned with my career goals. Thank you for simplifying the job search process!"</p>
        </div>
        <div className="testimonial-author">-Henry Schwengle</div>
      </div>
      <div className="testimonial">
        <div className="testimonial-photo">
          <div className="photo-background"></div>
          <div className="photo-author"></div>
        </div>
        <div className="testimonial-text">
          <p>"I had been struggling to find a job that truly matched my qualifications until I discovered this 
          incredible job searching portal. The vast selection of job listings and the ability to receive job alerts made all
           the difference. The portal helped me stay organized and informed throughout my job search journey.
           I'm now happily employed in a role that I love, all thanks to this platform!"</p>
        </div>
        <div className="testimonial-author">-Mr. George Robert</div>
      </div>
      <div className="testimonial">
        <div className="testimonial-photo">
          <div className="photo-background"></div>
          <div className="photo-author"></div>
        </div>
        <div className="testimonial-text">
          <p>"I've used several job searching websites before, but none were as effective as this one. The personalized
           recommendations and the seamless application process made job hunting less stressful. I appreciate the valuable
            resources and tips provided on the portal, which helped
           me improve my resume and interview skills. I couldn't have found my dream job without this portal's assistance."</p>
        </div>
        <div className="testimonial-author">-John Cena</div>
      </div>
    </div>

  </div>
</div>
  )
}
