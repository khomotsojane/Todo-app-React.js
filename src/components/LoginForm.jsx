import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // if (validate()) {
    //   fetch("http://localhost:5173/user/" + email).then((res) => {
    //     return res.json();
    //   }).then((resp) => {
    //     if (Object.keys(resp).length === 0){
    //       toast.error("Please enter valid username")
    //     } else{
    //       if (resp.password === password){
    //         toast.success('Success');
    //         navigate('/home');
    //       }else{
    //         toast.error('Please enter valid credentials');
    //       }
    //     }
    //   }).catch((err) => {
    //     toast.error('Login failed due to: ' + err.message);
    //   })


    // }
    
    
    if (email === 'user@example.com' && password === 'password') {
      
      navigate('/home');
    } else {
      
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
