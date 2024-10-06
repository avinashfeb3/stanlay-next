"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import Layout from '@/components/Layout';

const Dashboard = () => {
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = typeof window !== "undefined" && localStorage.getItem('isAuthenticated');

    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      router.push('/'); // Corrected to redirect to login page
    }
  }, [router]);

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </Layout>
  );
};

export default Dashboard;
