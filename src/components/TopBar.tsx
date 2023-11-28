// components/TopBar.tsx
import React from 'react';

// Define the props in case you need to pass down functions or data
interface TopBarProps {
  onSearch: (query: string) => void; // A function to handle search input
}

const TopBar: React.FC<TopBarProps> = ({ onSearch }) => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2 shadow">
      {/* Logo placeholder - replace with an actual image or SVG */}
      <div className="text-xl font-bold">Dashboard</div>

      {/* Search bar */}
      <div className="mx-4 flex flex-1 items-center">
        <input
          type="search"
          placeholder="Tell Genie who you are looking for... Be specific."
          className="w-full rounded-lg border px-4 py-2"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* User account information - adjust as necessary */}
      <div className="flex items-center">
        <span className="mr-4">Karin Chan</span>
        <div className="h-10 w-10 overflow-hidden rounded-full">
          {/* User avatar placeholder - replace with actual image */}
          <img
            src="/path-to-user-avatar.jpg"
            alt="User"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
