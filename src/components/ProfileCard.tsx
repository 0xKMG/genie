// components/ProfileCard.tsx
import React from 'react';

interface ProfileCardProps {
  name: string;
  location: string;
  nmls: string;
  languages: string[]; // This should match the name used in the Home component, which is 'languages'
  services: string[];
  onClick: () => void; // This prop should be used in the component
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  location,
  nmls,
  languages, // Renamed 'language' to 'languages' to match the props
  services,
  onClick, // This needs to be called when the card is clicked
}) => {
  return (
    // Attach the onClick handler to the card's container div
    <div
      className="rounded-lg bg-white p-4 shadow hover:bg-gray-100"
      onClick={onClick}
    >
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{name}</div>
        <p className="text-base text-gray-700">{location}</p>
        <p className="text-xs text-gray-600">NMLS #{nmls}</p>
      </div>
      <div className="px-6 pb-2 pt-4">
        {languages.map((lang) => (
          <span
            key={lang}
            className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
          >
            {lang}
          </span>
        ))}
      </div>
      <div className="px-6 pb-2 pt-4">
        {services.map((service) => (
          <span
            key={service}
            className="mb-2 mr-2 inline-block rounded-full bg-purple-200 px-3 py-1 text-sm font-semibold"
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
