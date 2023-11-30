// pages/[slug]/panel.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Panel from '@/components/GuestPanel';

interface MatchData {
  id: number;
  name: string;
  role: string;
  description: string;
  imageSrc: string; // Assuming you add image source to MatchData
}

export default function GuestPanel() {
  const router = useRouter();
  const [panelData, setPanelData] = useState<MatchData[]>([]);

  useEffect(() => {
    if (router.query.data) {
      try {
        const data = JSON.parse(router.query.data as string);
        setPanelData(data);
      } catch (error) {
        console.error('Error parsing data:', error);
      }
    }
  }, [router.query.data]);

  return <Panel panelData={panelData} />;
}
