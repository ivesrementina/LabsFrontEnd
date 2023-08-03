import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        const user = { username, email, password };

        axios.post("http://localhost:8080/api/user/register", user)
            .then((response) => {
                // Handle successful registration, e.g., show a success message or redirect to a login page
                console.log("Registration successful!");
            })
            .catch((error) => {
                // Handle registration errors, e.g., show an error message
                console.error("Registration failed:", error.message);
            });
    };

    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default RegisterForm;