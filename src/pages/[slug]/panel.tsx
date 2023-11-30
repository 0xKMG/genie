// pages/[slug]/panel.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Panel from '@/components/GuestPanel';

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

  if (isLoading) return <p>Loading...</p>;
  if (fetchError) return <p>Error: {fetchError}</p>;

  return <Panel panelData={panelData} />;
}
