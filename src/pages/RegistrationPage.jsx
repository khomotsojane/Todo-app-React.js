import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';

function RegistrationPage() {
  const history = useNavigate();

  

  return (
    <div className="container">
      <h1>Register Here</h1>
      <RegistrationForm />
      <Link to={"/login"}>Login</Link>
    </div>
  );
}

export default RegistrationPage;
