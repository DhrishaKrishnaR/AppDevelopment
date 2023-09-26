// Preview.js
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './Resume.css';


export default function Preview({ formData }) {
  const handleDownload = () => {
    const filename = 'jobplazaResumes.pdf';

    html2canvas(document.getElementById('resume-preview')).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 277); 
      pdf.save(filename);
    });
  };

  return (
    <div className="bodyr">
      <div className="output" id="resume-preview">
        <h2>Preview:</h2>
        <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Mobile Number:</strong> {formData.mob}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>LinkedIn Profile:</strong> {formData.linkedin}</p>
          <p><strong>Skills:</strong> {formData.skill}</p>
          <p><strong>Work Experience:</strong> {formData.workexp}</p>
          <p><strong>Job Title:</strong> {formData.tit}</p>
          <p><strong>Job Position:</strong> {formData.pos}</p>
          <p><strong>Achievements:</strong> {formData.achievements}</p>
          <p><strong>Project Link 1:</strong> {formData.pro1}</p>
          <p><strong>Project Link 2:</strong> {formData.pro2}</p><br/><br/><br/><br/><br/><br/>
          <div className="download-button">
            <button className='resb' onClick={handleDownload}>Download PDF</button>
          </div>
      </div>
    </div>
  );
}
