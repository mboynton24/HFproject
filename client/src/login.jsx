import { useState } from "react";
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

  return (
    <div className="h-screen flex justify-center items-center">
      <form onSubmit={onSubmit} class="mx-auto max-w-xl space-y-5">
        <h1>Login</h1>
        <div>
          <label for="username" class="mb-1 block text-sm font-medium text-gray-700">Username</label>
          <input type="text" id="username" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Username" required
            value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label for="password" class="mb-1 block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" class="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-black shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300">Log In</button>
      </form>
    </div>
  );
};

export default Login;