// components/DetailedProfileView.tsx
import React from 'react';

interface Profile {
  name: string;
  nmls: string;
  location: string;
  languages: string[];
  description: string;
}

interface DetailedProfileProps {
  profile: Profile;
}

const DetailedProfileView: React.FC<DetailedProfileProps> = ({ profile }) => {
  // Destructure the profile object for easier access to its properties
  const { name, nmls, location, languages, description } = profile;

  return (
    <div className="rounded-lg bg-white p-4 shadow-lg">
      <div className="flex flex-col items-center">
        <img
          className="h-24 w-24 rounded-full object-cover"
          src="/path-to-profile-image.jpg" // Replace with the path to the profile image
          alt="Profile"
        />
        <h2 className="mt-4 text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{nmls}</p>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
      <div className="my-4">
        <button className="mr-2 rounded-full bg-green-500 px-4 py-2 text-sm text-white">
          Ask for Quote
        </button>
        <button className="rounded-full bg-blue-500 px-4 py-2 text-sm text-white">
          Chat
        </button>
      </div>
      <p className="text-sm text-gray-800">{description}</p>
      <div className="mt-4">
        <h3 className="font-semibold">THE LANGUAGES I SPEAK:</h3>
        {languages.map((language) => (
          <span key={language} className="mr-2 text-sm text-gray-600">
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DetailedProfileView;
