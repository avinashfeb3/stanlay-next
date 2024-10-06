import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const Navbar = () => {
  const router = useRouter(); // Initialize useRouter

  const handleLogout = () => {
    // Clear the authentication status
    localStorage.removeItem('isAuthenticated'); // Remove authentication status from local storage
    router.push('/'); // Redirect to the login page
  };

  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span>Profile</span>
          <button
            onClick={handleLogout} // Handle logout on button click
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
