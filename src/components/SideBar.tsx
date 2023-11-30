// Importing necessary modules
import Link from 'next/link';
import React from 'react';

interface SideBarProps {
  onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ onClose }) => {
  return (
    <div className="flex h-screen flex-col justify-between bg-[#E4DDD6]">
      <div className="p-6">
        <div className="flex justify-start">
          <button onClick={onClose} className="text-4xl">
            &times;
          </button>
        </div>
      </div>
      <div className="flex grow flex-col items-center justify-center">
        <div className="mb-8">
          <Link
            className="block border-b-2 border-black pb-2 text-2xl font-semibold
            text-gray-900"
            href="/"
          >
            HOME
          </Link>
        </div>
        <div className="mb-8">
          <Link
            href="/connections"
            className="block border-b-2 border-black pb-2 text-2xl font-semibold
            text-gray-900"
          >
            CONNECTIONS
          </Link>
        </div>
        <div className="mb-8">
          <Link
            className="block border-b-2 border-black pb-2 text-2xl font-semibold
            text-gray-900"
            href="/events"
          >
            EVENTS
          </Link>
        </div>
        <div className="mb-8">
          <Link
            className="block border-b-2 border-black pb-2 text-2xl font-semibold
            text-gray-900"
            href="/profile"
          >
            PROFILE
          </Link>
        </div>
      </div>
      <div className="p-6">
        {/* Bottom area of the screen can be used for additional content or navigation if needed */}
      </div>
    </div>
  );
};

export default SideBar;
