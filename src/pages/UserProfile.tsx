// pages/userProfile.js
import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-gray-100 px-4 py-8">
      <div className="w-full max-w-xl space-y-6 rounded-lg bg-white p-6 shadow-md">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://via.placeholder.com/150" // Placeholder image, replace with your URL
            alt="Profile Picture"
            className="h-40 w-40 rounded-full"
          />

          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold">John Doe</h1>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-gray-500">
              Creating solutions for the modern web.
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <a
            href="https://www.linkedin.com/in/johndoe" // Replace with the real LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
