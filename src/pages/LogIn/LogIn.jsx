import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      alert(`You are logged in, ${matchedUser.name}!`);
      setLoginData({ email: '', password: '' });
      navigate('/');
    } else {
      alert('Invalid email or password!');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-4 select-none">
      <form
        data-aos="fade-left"
        onSubmit={handleLogin}
        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Login to Your Account
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </div>

        <div className="flex gap-4 mb-4">
          <button
            type="submit"
            className="w-1/2 bg-blue-400 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-1/2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Cancel
          </button>
        </div>

        <p className="text-center text-sm text-gray-700 dark:text-gray-300">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline hover:text-blue-800"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
