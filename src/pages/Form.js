// src/components/Form.js
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Use Axios to send data to the public API
    axios.post('https://jsonplaceholder.typicode.com/posts', formData)
      .then(response => {
        console.log('Data sent successfully:', response.data);
  
        // Reset form data after successful submission
        setFormData({
          title: '',
          body: ''
        });
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };
  
  return (
    <div>
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Body:
          <textarea name="body" value={formData.body} onChange={handleChange}></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
