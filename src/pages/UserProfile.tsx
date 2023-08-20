import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <img
          src="https://via.placeholder.com/150" // Placeholder image, replace with your URL
          alt="Profile Picture"
          className="mx-auto h-32 w-32 rounded-full"
        />

        <h1 className="mt-4 text-xl font-semibold">John Doe</h1>
        <p className="text-gray-600">Software Engineer</p>
        <p className="mt-2 text-gray-500">
          Creating solutions for the modern web.
        </p>

        <div className="mt-4 flex justify-center space-x-3">
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
