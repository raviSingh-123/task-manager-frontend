import React from 'react';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Task Manager
          </h1>
          <p className="text-lg text-gray-600">
            Organize your tasks efficiently and boost your productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">New User?</h2>
            <p className="text-gray-600 mb-6">
              Create an account to start managing your tasks and boost your productivity.
            </p>
            <Link
              to="/register"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-3 px-6 rounded-lg transition duration-200"
            >
              Register Now
            </Link>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Already Registered?</h2>
            <p className="text-gray-600 mb-6">
              Sign in to access your tasks and continue from where you left off.
            </p>
            <Link
              to="/login"
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center font-medium py-3 px-6 rounded-lg transition duration-200"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="text-blue-600 text-2xl mb-2">📝</div>
              <h4 className="font-medium text-gray-800">Create Tasks</h4>
              <p className="text-gray-600 text-sm">Add and organize your tasks easily</p>
            </div>
            <div className="p-4">
              <div className="text-blue-600 text-2xl mb-2">✏️</div>
              <h4 className="font-medium text-gray-800">Edit & Update</h4>
              <p className="text-gray-600 text-sm">Modify your tasks as needed</p>
            </div>
            <div className="p-4">
              <div className="text-blue-600 text-2xl mb-2">✅</div>
              <h4 className="font-medium text-gray-800">Track Progress</h4>
              <p className="text-gray-600 text-sm">Monitor your task completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 