import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) =>{
    setConfirmPassword(e.target.value);
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    navigate('/login');

  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleRegistration}>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
        <input type="password" value={confirmPassword} onChange={handleConfirmPassword} placeholder="Confirm password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
