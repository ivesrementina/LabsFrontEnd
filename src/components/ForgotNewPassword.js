import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ForgotNewPassword = () => {
  const { token } = useParams()
  console.log('TOKEN', token)
  // const { token } = match.params; 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(token)
    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8080/api/account/new-password?token=${token}&newPassword=${password}`, {});
      console.log(response.data);
      setSuccessMessage('Password reset successful!');
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotNewPassword;
// import React, { useState } from 'react';
// import axios from 'axios';

// const ResetPassword = ({ token }) => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8080/api/account/reset-password', {
//         token,
//         password,
//         confirmPassword,
//       });
//       console.log(response.data);
//       // Handle success: Display a confirmation message or redirect to a success page
//       setSuccessMessage('Password reset successful!');
//       // You can also redirect to a success page using React Router
//       // history.push('/success');
//     } catch (error) {
//       console.error(error);
//       // Handle error: Display an error message to the user
//       setErrorMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div>
//       {successMessage && <p>{successMessage}</p>}
//       {errorMessage && <p>{errorMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="password"
//           placeholder="New Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         <button type="submit">Reset Password</button>
//       </form>
//     </div>
//   );
// };

// export default ResetPassword;