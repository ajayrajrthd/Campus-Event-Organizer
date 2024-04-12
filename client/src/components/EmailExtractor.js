import React, { useState } from 'react';
import Papa from 'papaparse';
import emailjs from '@emailjs/browser'

function EmailExtractor() {
  const [emails, setEmails] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          const emailColumn = result.data.map(row => row.Email);
          setEmails(emailColumn.filter(email => email)); // Filter out empty values
          console.log(emailColumn)
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_od0c8bz';
    const templateId = 'template_883nwt5';
    const publicKey = 'bmOd080D0VBGlMg2V';

  const templateParam = {
    to_name:'User',
    from_name:'WONDERFEST',
    message:'This is a test message from wonderfest about the confirmation',
    to_user:emails,
};
  
  
  emailjs.send(serviceId, templateId, templateParam, publicKey)
  .then((response) => {
    console.log("Email Sent Successfully!", response);
 })
  .catch((err) => {
    console.log("Error Sending Email",err);
 });
}

  return (
    <div>
      <h1>Email Extractor</h1>
      <input type="file" onChange={handleFileChange} accept=".csv" />
      <h2>Emails:</h2>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Send Emails</button>
    </div>
  );
}

export default EmailExtractor;
