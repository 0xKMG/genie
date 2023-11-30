import React from 'react';

interface MatchData {
  id: number;
  name: string;
  role: string;
  description: string;
  imageSrc: string; // Assuming you add image source to MatchData
}

interface PanelProps {
  panelData: MatchData[];
}

// components/Panel.tsx

const GuestPanel = ({ panelData }: PanelProps) => {
  return (
    <div className="overflow-auto bg-[#E4DDD6] px-6 py-8">
      {/* ... Other UI elements ... */}
      <div className="space-y-6">
        {panelData.map((item: MatchData) => (
          <div
            key={item.id}
            className="flex flex-col items-center rounded-xl bg-white p-4 shadow-md"
          >
            <img
              src={item.imageSrc}
              alt={`Picture of ${item.name}`}
              className="h-32 w-32 rounded-full object-cover" // Adjust size as needed
            />
            <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.role}</p>
            <p className="mt-2 text-center text-sm">{item.description}</p>
            {/* ... Other details ... */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestPanel;
