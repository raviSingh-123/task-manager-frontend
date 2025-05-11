import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router';
import config from '../config';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // Clear error when user starts typing
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!form.email || !form.password) {
            setError('Please enter both email and password');
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post(`${config.API_URL}/api/v1/auth/login`, form);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            if (err.response?.status === 404) {
                if (err.response?.data?.message?.includes('not registered')) {
                    setError('This email is not registered. Please register first.');
                } else {
                    setError('Invalid email or password');
                }
            } else if (err.response?.status === 200 && err.response?.data?.message?.includes('Invalid Password')) {
                setError('Incorrect password. Please try again.');
            } else {
                setError('Login failed. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
                
                {error && (
                    <div className="mb-4 p-3 rounded-md bg-red-50 border border-red-200">
                        <p className="text-red-600 text-sm">{error}</p>
                        {error.includes('not registered') && (
                            <Link to="/register" className="text-blue-600 hover:text-blue-700 text-sm mt-2 inline-block">
                                Click here to register
                            </Link>
                        )}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition disabled:opacity-50"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-600 hover:text-blue-700">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
}