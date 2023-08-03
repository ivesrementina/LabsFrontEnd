import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/account/reset-password', { email });
      console.log(response.data);
      // Handle success: Display a confirmation message
      setSuccessMessage('Password reset email sent!');

      // You can also perform additional actions after success, such as clearing the form fields
      setEmail('');
      console.log(response.data)
    } catch (error) {
        if (error.response) {
          if (error.response.status === 404) {
            // Handle the 404 error
            console.log("Resource not found");
          } else if (error.response.status === 401) {
            // Handle the 401 error
            console.log("Unauthorised");
          }
        } else {
          // Handle other errors
          console.log("An error occurred");
        }
    }
  };

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;