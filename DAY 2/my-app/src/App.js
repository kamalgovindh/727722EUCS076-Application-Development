import React, { useState } from 'react';
import './App.css'; // You can add your styles here

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Simple email and password check
    if (email === 'user@example.com' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      setIsLogin(false);
    }
  };

  const handleRegister = () => {
    // Simple registration logic with password match check
    if (password === confirmPassword) {
      setIsLogin(true);
      // Clear the registration form
      setEmail('');
      setPassword('');
      setUsername('');
      setConfirmPassword('');
    } else {
      alert('Passwords do not match!');
    }
  };

  if (isAuthenticated) {
    return <h2>Welcome to the Home Page</h2>;
  }

  return (
    <div className="container">
      {isLogin ? (
        <div className="login">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account? <button onClick={() => setIsLogin(false)}>Register</button>
          </p>
        </div>
      ) : (
        <div className="register">
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
          <p>
            Already have an account? <button onClick={() => setIsLogin(true)}>Login</button>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;