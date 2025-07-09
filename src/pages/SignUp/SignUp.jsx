import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Signup = () => {
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignup = (e) => {
    e.preventDefault();
    const { name, email, password } = signupData;

    if (!name || !email || !password) {
      alert('All fields are required.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = users.find((user) => user.email === email);

    if (emailExists) {
      alert('Email already registered!');
      return;
    }

    const updatedUsers = [...users, { name, email, password }];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert(`Signup successful! Confirmation email sent to ${email}`);
    setSignupData({ name: '', email: '', password: '' });
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-4 select-none">
      <form
        data-aos="fade-right"
        onSubmit={handleSignup}
        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Create Your Account
        </h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={signupData.name}
            onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={signupData.email}
            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={signupData.password}
            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-4">
          <button
            type="submit"
            className="w-1/2 bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-1/2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Cancel
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-700 dark:text-gray-300">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-purple-600 hover:underline hover:text-purple-800"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
