import React, { useState } from 'react';
import Papa from 'papaparse';

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
    </div>
  );
}

export default EmailExtractor;
