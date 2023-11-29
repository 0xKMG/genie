// components/panel.tsx
import React from 'react';
// import { useSwipeable } from 'react-swipeable';

const Panel = () => {
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
            <img
              alt="A smiling person in a striped shirt at a cafe with blurred background lights"
              className="w-full"
              height="300"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-JmoRdnvdVQa671X6jst7EiwR/user-71FrBw7ZSCC5ReA61980pJZv/img-E9KFnpCTUDntpGj64hcgC4HL.png?st=2023-11-28T11%3A44%3A48Z&amp;se=2023-11-28T13%3A44%3A48Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2023-11-27T16%3A56%3A38Z&amp;ske=2023-11-28T16%3A56%3A38Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=cJb%2B5X%2BmX%2B1lZpCVFK0JJtm3GqXrrNzkGq0GOhsD7pM%3D"
              width="300"
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
export default Panel;
