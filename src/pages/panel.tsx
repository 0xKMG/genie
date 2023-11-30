// components/panel.tsx
import Image from 'next/image';
import React from 'react';

// import { useSwipeable } from 'react-swipeable';

const panel = () => {
  // const [userIndex, setUserIndex] = useState(0);
  // const users = [
  //   { name: 'Winson', location: 'Hong Kong' },
  //   // Add more user details here
  // ];
  // const currentUser = users[userIndex];
  // const handlers = useSwipeable({
  //   onSwipedLeft: () =>
  //     setUserIndex((prevIndex) => (prevIndex + 1) % users.length),
  // });

  return (
    <div className="bg-[#E4DDD6] px-6 py-8">
      <div className="flex items-center justify-between">
        <i className="fas fa-bars"></i>
        <div className="flex items-center">
          <i className="fas fa-map-marker-alt mr-2"></i>
          <span>Hong Kong</span>
          <i className="fas fa-bell ml-4"></i>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-semibold">Hello Winson 👋</h1>
        <h2 className="mt-2 text-xl">Meet your connections</h2>
      </div>
      <div className="mt-4">
        <input
          className="w-full rounded-full border border-gray-300 p-3"
          placeholder="Search"
          type="search"
        />
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Top picks for you</h3>
        <div className="mt-4">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              alt="A smiling person in a striped shirt at a cafe with blurred background lights"
              className="w-full"
              src="/assets/winson_cheng.jpg"
              height={500}
              width={500}
            />
            <div className="flex items-center justify-between bg-white p-4">
              <span>Paris</span>
              <i className="fas fa-map-marker-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default panel;
