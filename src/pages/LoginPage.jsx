import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };

  return (
    <div className="container">
      <h1>Login Here</h1>
      <LoginForm />
      <Link to="/">Register</Link>
    </div>
  );
}

export default LoginPage;
