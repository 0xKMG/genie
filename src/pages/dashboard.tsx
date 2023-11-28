import React, { useState } from 'react';

import TopBar from '@/components/TopBar';

import DetailedProfileView from '../components/DetailedProfileView';
import ProfileCard from '../components/ProfileCard';

// ... [Profile interface and dummyProfiles array remain unchanged] ...

interface Profile {
  id: number;
  name: string;
  location: string;
  nmls: string;
  languages: string[]; // Renamed from language to languages to match DetailedProfileView
  services: string[];
  description: string; // Added description property
}

const Home: React.FC = () => {
  const [selectedProfileId, setSelectedProfileId] = useState<number | null>(
    null,
  );

  const handleSearch = (/* query: string */) => {
    // TODO: Implement search functionality
  };

  const dummyProfiles: Profile[] = new Array(20).fill(null).map((_, index) => ({
    id: index,
    name: `User ${index + 1}`,
    location: 'San Francisco, CA',
    nmls: `NMLS #${index + 4918074}`,
    languages: ['English', 'Spanish'],
    services: [
      'Conventional',
      'VA Loans',
      'Non-QM mortgage',
      'Doctors Home...',
    ],
    description: 'This is a placeholder description.',
  }));

  const selectedProfile =
    selectedProfileId !== null
      ? dummyProfiles.find((p) => p.id === selectedProfileId)
      : null;

  return (
    <div className="container mx-auto bg-gray-50 px-6 py-8">
      <TopBar onSearch={handleSearch} />

      <div className="flex">
        {/* Left Panel: Profile Cards Grid */}
        <div className="flex w-2/3 flex-wrap overflow-auto">
          {dummyProfiles.map((profile) => (
            <div key={profile.id} className="w-1/4 p-2">
              <ProfileCard
                name={profile.name}
                location={profile.location}
                nmls={profile.nmls}
                languages={profile.languages}
                services={profile.services}
                onClick={() => setSelectedProfileId(profile.id)}
              />
            </div>
          ))}
        </div>

        {/* Right Panel: Detailed Profile View */}
        <div className="sticky top-0 ml-4 h-screen w-1/3 overflow-auto rounded-lg bg-white p-4 shadow">
          {selectedProfile ? (
            <DetailedProfileView profile={selectedProfile} />
          ) : (
            <div className="font-semibold text-gray-900">
              Please select a profile
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
