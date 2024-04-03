import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        // Login successful
        const data = await response.json();

        // Redirect to the dashboard
        navigate("/dashboard");
      } else {
        // Login failed
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  }

  // Function to handle navigation to sign-up page
  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen" style={{ backgroundImage: `url(/bobcat.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#4d0000' }}>
      <h1 className="text-3xl font-bold text-black mt-10 mb-8" style={{ marginBottom: '2rem' }}>BobcatDrinkTracker</h1>
      <div className="flex justify-center items-center">
        <form onSubmit={onSubmit} className="space-y-5 text-white">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <div>
  <label htmlFor="username" className="mb-1 block text-sm font-medium">Username</label>
  <input type="text" id="username" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 text-black" placeholder="Username" required
    value={username} onChange={(e) => setUsername(e.target.value)} />
</div>
<div>
  <label htmlFor="password" className="mb-1 block text-sm font-medium">Password</label>
  <input type="password" id="password" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 text-black" placeholder="Password"
    value={password} onChange={(e) => setPassword(e.target.value)} />
</div>
          <button type="submit" className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm text-black font-medium shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200">Log In</button>
          <button type="button" onClick={goToSignUp} className="mt-2 rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-black text-sm font-medium shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200">Sign Up</button>
        </form>
      </div>
    </div>
  );

};

export default Login;
