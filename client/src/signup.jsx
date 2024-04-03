import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ email, username, password }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.status !== 200) {
      alert('Failed');
    } else {
      alert('Registration Success');
      navigate("/login"); // Redirect to the login page
    }
  }

  // Function to handle navigation to login page
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    
    <div className="h-screen flex justify-center items-center" style={{ backgroundColor: '#4d0000' }}>
      <form onSubmit={onSubmit} className="space-y-5">
      <h1 className="text-2xl font-semibold text-white mt-10 mb-4">Register</h1>        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-white">Email</label>
          <input type="email" id="example1" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-white" placeholder="you@email.com" required 
            value={email} onChange={ev => setEmail(ev.target.value)} />
        </div>
        <div>
          <label htmlFor="username" className="mb-1 block text-sm font-medium text-white">Username</label>
          <input type="text" id="example1" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Username" required
            value={username} onChange={ev => setUsername(ev.target.value)} />
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium text-white">Password</label>
          <input type="password" id="example2" className="block w-full rounded-md border-white-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 placeholder-white-500" placeholder="Password" 
            value={password} onChange={ev => setPassword(ev.target.value)} />
        </div>
        <button type="submit" className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Sign Up</button>
        <button type="button" onClick={goToLogin} className="mt-2 rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Login</button>
      </form>
    </div>
  );
}

export default SignUp;
