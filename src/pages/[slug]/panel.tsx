// pages/[slug]/panel.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Panel from '@/components/GuestPanel';
import Loader from '@/components/Loader';

interface MatchData {
  id: number;
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  linkedin_url: string;
}

// Define an interface for your API response if it has a different structure
interface ApiResponse {
  name: string;
  key: string; // Assuming 'key' corresponds to the 'role'
  profile_text: string;
  profile_pic: string;
  linkedin_url: string;
}

export default function GuestPanel() {
  const router = useRouter();
  const { slug } = router.query;
  const [panelData, setPanelData] = useState<MatchData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(''); // Renamed to avoid conflict

  useEffect(() => {
    async function fetchMatches() {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/proxy?slug=${slug}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ApiResponse[] = await response.json(); // Define the type of the data
        const formattedData = data.map((item: ApiResponse, index: number) => ({
          id: index,
          name: item.name,
          role: item.key,
          description: item.profile_text,
          imageSrc: item.profile_pic,
          linkedin_url: item.linkedin_url,
        }));
        setPanelData(formattedData);
      } catch (error: any) {
        // Define 'error' type
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (slug) {
      fetchMatches();
    }
  }, [slug]);

  const capitalize = (s: any) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const firstName = slug ? capitalize(slug.toString().split('-')[0]) : '';

  if (isLoading) {
    return <Loader />;
  }
  if (fetchError) return <p>Error: {fetchError}</p>;

  return (
    <div className="flex min-h-screen flex-col justify-end bg-[#E4DDD6] p-12">
      <h1 className="text-2xl ">Hello {firstName} 👋</h1>
      <h1 className="mb-6 text-2xl font-bold">Meet your connections</h1>
      <div className="flex items-center rounded-full bg-gray-200 px-4 py-2">
        <i className="fas fa-search "></i>
        <input
          className="ml-2 mt-2 flex-1 bg-transparent outline-none"
          type="text"
        />
      </div>
      <h1 className="my-3  text-2xl">Genie&apos;s picks for you </h1>
      <Panel panelData={panelData} />
    </div>
  );
}
