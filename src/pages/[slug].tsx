import { useRouter } from 'next/router';
import { useState } from 'react';

import SideBar from '@/components/SideBar';

async function fetchAttendees() {
  const response = await fetch(
    'https://ml.aska.ai/geniefriends/get_guest_list?event_name=secretdinnerxv&passcode=magic',
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

interface Guest {
  name: string;
  key: string;
  profile_pic: string;
  linkedin_url: string;
  profile_text: string;
  slug: string;
}

interface PostProps {
  postData: Guest;
}
interface StaticPropsParams {
  params: {
    slug: string;
  };
}

export default function Post({ postData }: PostProps) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const enterTheWorld = async () => {
    setIsLoading(true);

    // Transform the slug back to the original name format
    const nameForApi = postData.name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    const apiFormattedName = encodeURIComponent(nameForApi); // Format the name for the URL

    const apiEndpoint = `https://ml.aska.ai/geniefriends/genie_wish?query=give%20me%205%20matches%20in%20this%20event&model=gpt-3.5-turbo&your_name=${apiFormattedName}`;

    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();

      router.push({
        pathname: `/${postData.slug}/panel`,
        query: { data: JSON.stringify(data.res) },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (router.isFallback) {
    // Alternatively, you can create a loading component here.
    return <div>Loading...</div>;
  }

  if (isSidebarOpen) {
    return <SideBar onClose={toggleSidebar} />;
  }

  return (
    <div
      className="relative h-screen bg-cover"
      style={{
        backgroundImage: `url('${postData.profile_pic}')`,
        backgroundPosition: '-300px',
      }}
    >
      {/* Transparent top bar */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-center p-4 text-white">
        <div>
          <i
            className="fas fa-ellipsis-h text-2xl "
            onClick={toggleSidebar}
          ></i>{' '}
        </div>
        <div className="mx-20">
          <img
            src="/assets/genie.png" // Placeholder for the logo
            alt="Company Logo"
            style={{ height: '100px' }} // Adjust size as needed
          />
        </div>
        <div>
          <i className="fas fa-search text-2xl"></i> {/* Search icon */}
        </div>
      </div>
      <div className="bg-opacity-50/50 flex items-center justify-between text-white"></div>
      <div className="absolute inset-x-0 bottom-20 p-10 text-center text-white">
        <div className=" mb-10 text-2xl font-bold">
          WELCOME, {postData.name.toUpperCase().split(' ')[0]}
        </div>

        <div className="mx-4 ">
          <p className=" mb-6  text-xs">{postData.profile_text}</p>
        </div>

        <button
          onClick={enterTheWorld}
          disabled={isLoading}
          className="mx-auto mt-4 max-w-xs rounded-lg bg-white px-14 py-3 font-bold text-black"
        >
          ENTER THE WORLD
        </button>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const attendees: Guest[] = await fetchAttendees();
    const paths = attendees.map((attendee: Guest) => ({
      params: { slug: attendee.name.toLowerCase().replace(/ /g, '-') },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error('Failed to fetch attendees:', error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }: StaticPropsParams) {
  try {
    const attendees: Guest[] = await fetchAttendees();
    const postData = attendees.find(
      (attendee: Guest) =>
        attendee.name.toLowerCase().replace(/ /g, '-') === params.slug,
    );

    if (!postData) {
      return { notFound: true };
    }

    return { props: { postData } };
  } catch (error) {
    console.error('Failed to fetch attendee data:', error);
    return { notFound: true };
  }
}
