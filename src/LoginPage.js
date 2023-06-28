import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const users = [
    { username: 'foo', password: 'bar' },
    { username: 'shaik', password: 'bar' },
    { username: 'naveen', password: 'bar' },
  ];

  const handleLogin = () => {
    // Perform authentication logic here
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setLoggedIn(true);
      console.log('Logged in successfully');
    } else {
      console.log('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    console.log('Logged out successfully');
  };

  if (isLoggedIn) {
    return (
      <div className="login-container">
        <div className="gradient-background">
          <h2 className="login-heading">Welcome, how are you, {username}!</h2>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }


  return (
    <div className="login-container">
      <div className="gradient-background">
      <h2 className="login-heading">Login</h2>
      <div className="input-group">
        <label htmlFor="username">Name:</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <br />
      <div className="input-group">
        <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <br />
      <button id="login-button" onClick={handleLogin}>Login</button>
      <p>New user? <button >Create Account</button></p>
     </div>
    </div>
  );
};

export default LoginPage;