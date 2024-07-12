import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Attendance() {
    const [pdfs, setPdfs] = useState([]);

    useEffect(() => {
      const fetchPdfs = async () => {
        try {
          const response = await axios.get('http://localhost:5000/pdf_get');
          setPdfs(response.data);
        } catch (error) {
          console.error('Error fetching PDFs:', error);
        }
      };
  
      fetchPdfs();
    }, []);
  
    const handleDownload = async (pdfId, pdfName) => {
      try {
        const res = await axios.get(`http://localhost:5000/pdf_get/${pdfId}`, {
          responseType: 'blob'
        });
        const blob = new Blob([res.data], {type: res.data.type});
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = pdfName;
        link.click();
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }
    };
  
    return (
      <div>
        <h2>Attandance Record</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {pdfs.map((pdf) => (
              <tr key={pdf._id}>
                <td>{pdf.name}</td>
                <td>
                  <button onClick={() => handleDownload(pdf._id,pdf.name)}>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }



//     const [pdfs, setPdfs] = useState([]);

//   useEffect(() => {
//     const fetchPdfs = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/pdf_get');
//         setPdfs(response.data);
//       } catch (error) {
//         console.error('Error fetching PDFs:', error);
//       }
//     };

//     fetchPdfs();
//   }, []);

//   const handleDownload = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/pdf_get/${id}`, {
//         responseType: 'blob'
//       });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'file.pdf');
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error('Error downloading PDF:', error);
//     }
//   };
//   return(
//   <div>
//   <h2>PDF List</h2>
//   <ul>
//     {pdfs.map((pdf) => (
//       <li key={pdf._id}>
//         {pdf.name} - <button onClick={() => handleDownload(pdf._id)}>Download</button>
//       </li>
//     ))}
//   </ul>
// </div>
// );
// }

export default Attendance;