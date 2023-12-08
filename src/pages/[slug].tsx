import { useRouter } from 'next/router';
import { useState } from 'react';

import SideBar from '@/components/SideBar';

async function fetchAttendees() {
  const response = await fetch(
    'https://ml.aska.ai/geniefriends/get_guest_list?event_name=D1208-SG&passcode=magic',
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
  const [wish, setWish] = useState('');
  // Assuming the slug is available in the query
  const handleWishChange = (e: any) => {
    setWish(e.target.value);
  };

  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function convertNameToSlug(name: string) {
    return name.toLowerCase().split(' ').join('-');
  }

  const enterTheWorld = async () => {
    setIsLoading(true);
    router.push({
      pathname: `/${convertNameToSlug(postData.name)}/panel`,
    });
    setIsLoading(false);
  };

  const handleSubmit = async () => {
    // Navigate to the panel page with the fetched data
    setIsLoading(true);
    router.push({
      pathname: `/${convertNameToSlug(postData.name)}/panel`,
    });
    setIsLoading(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  if (router.isFallback) {
    // Alternatively, you can create a loading component here.
    return <div>Loading...</div>;
  }

  if (isSidebarOpen) {
    return <SideBar onClose={toggleSidebar} />;
  }

  return isSearchOpen ? (
    <div className="flex min-h-screen flex-col items-center  bg-[#E4DDD6] p-12">
      <div className="mb-10 items-start">
        <img
          src="/assets/genie.png"
          alt="Company Logo"
          className="brightness-0 grayscale"
          style={{ height: '100px' }}
        />
      </div>
      <div className="text-center">
        <h2 className="mb-12 text-4xl font-bold">MAKE A WISH </h2>
        <p className="text-s mb-12">
          Tell Genie what kind of person you’d like to meet and what you’d need
          them to help you — we’ll match the right ones for you.
        </p>
        <div className="mb-8">
          <textarea
            className="h-40 w-full resize-none rounded-lg border-2 border-black bg-[#E4DDD6] p-4 text-lg"
            placeholder="Enter your wish here"
            value={wish}
            onChange={handleWishChange}
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full rounded-lg bg-black py-4 text-lg font-semibold text-white"
        >
          SUBMIT
        </button>
      </div>
    </div>
  ) : (
    <div
      className="relative h-screen bg-cover"
      style={{
        backgroundImage: `url('${postData.profile_pic}')`,
        backgroundPosition: '-300px',
      }}
    >
      {/* Transparent top bar */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-center p-4 text-white">
        {/* <div>
          <i
            className="fas fa-ellipsis-h text-2xl "
            onClick={toggleSidebar}
          ></i>{' '}
        </div> */}
        <div className="mx-20">
          <img
            src="/assets/genie.png" // Placeholder for the logo
            alt="Company Logo"
            style={{ height: '100px' }} // Adjust size as needed
          />
        </div>
        <div>
          <i onClick={toggleSearch} className="fas fa-search text-2xl"></i>{' '}
          {/* Search icon */}
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
    return { notFound: true };
  }
}
