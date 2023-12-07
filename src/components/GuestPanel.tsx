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
  // Helper function to truncate text to the first 50 characters
  const truncateText = (text: string, length: number) => {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  return (
    <div className="flex w-full overflow-x-scroll  bg-[#E4DDD6] px-6 py-8">
      {panelData.map((item: MatchData) => (
        <div
          key={item.id}
          className="mr-6 inline-block w-80 flex-none overflow-hidden rounded-xl shadow-md"
          style={{ minWidth: '80%', minHeight: '50vh' }} // Adjust height as needed
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.imageSrc || '/default-image.jpg'})`,
            }}
          >
            <div className="flex h-full w-full flex-col justify-end rounded-xl bg-black bg-opacity-50 p-4">
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <p className="text-sm text-gray-300">
                {item.role.replace(',', ' |')}
              </p>
              <div>
                {' '}
                <p className="mt-2 overflow-hidden text-sm text-white">
                  {truncateText(item.description, 150)}
                </p>
              </div>

              {item.linkedin_url && (
                <a
                  href={item.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-300 hover:text-blue-500"
                >
                  View LinkedIn Profile
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestPanel;
