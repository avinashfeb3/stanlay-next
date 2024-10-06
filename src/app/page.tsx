"use client"; // Ensure this component is rendered on the client side
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function Login() {
  const router = useRouter(); // Initialize useRouter
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated
    const authStatus = typeof window !== "undefined" && localStorage.getItem('isAuthenticated');
    if (authStatus) {
      setIsAuthenticated(true);
      router.push('/dashboard'); // Redirect to the dashboard if already authenticated
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    // Check if email and password are valid
    if (email && password) {
    // Simulate successful login (you would replace this with your actual login logic)
    localStorage.setItem('isAuthenticated', 'true'); // Set authentication status
    router.push('/dashboard'); // Redirect to the dashboard
    }else{
      alert("Please enter valid email and password.");
    }
  };

  // If the user is authenticated, disable the login button
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className={`w-full p-2 rounded transition ${isAuthenticated ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
            disabled={isAuthenticated} // Disable button if user is authenticated
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
