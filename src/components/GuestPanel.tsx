// components/Panel.tsx
import React from 'react';

interface MatchData {
  id: number;
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  linkedin_url: string;
}

interface PanelProps {
  panelData: MatchData[];
}

const GuestPanel = ({ panelData }: PanelProps) => {
  return (
    <div>
      {/* Wrap the cards in a horizontally scrollable container */}
      <div className="flex space-x-6 overflow-x-auto">
        {panelData.map((item: MatchData) => (
          <div
            key={item.id}
            className="relative flex w-60 shrink-0 flex-col items-center rounded-xl bg-white p-4 shadow-md"
          >
            {/* Use background image */}
            <div
              className="absolute inset-0 h-full w-full rounded-xl bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${
                  item.imageSrc || '/path/to/default/image.jpg'
                })`,
              }}
            />
            {/* Add an overlay if you want to see the text more clearly */}
            <div className="absolute inset-0 rounded-xl bg-black bg-opacity-50"></div>

            {/* Content should be in another container to be positioned above the background */}
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.role}</p>
              <p className="mt-2 text-center text-sm">{item.description}</p>
              {item.linkedin_url && (
                <a
                  href={item.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-600 hover:text-blue-800"
                >
                  View LinkedIn Profile
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestPanel;
