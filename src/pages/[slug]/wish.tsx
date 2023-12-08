import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Wish() {
  const [wish, setWish] = useState('');
  const router = useRouter();
  const { slug } = router.query; // Assuming the slug is available in the query
  console.log(slug);

  const handleWishChange = (e: any) => {
    setWish(e.target.value);
  };

  const formatSlugToName = (_slug: any) => {
    return _slug
      .split('-')
      .map((word: any) => word.charAt(0) + word.slice(1))
      .join(' ');
  };

  console.log(formatSlugToName(slug));

  const handleSubmit = async () => {
    try {
      const apiUrl = `https://ml.aska.ai/geniefriends/genie_wish?query=${encodeURIComponent(
        wish,
      )}&model=gpt-3.5-turbo&your_name=${formatSlugToName(
        slug,
      )}&event_name=D1208-SG`;

      console.log(apiUrl);

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to submit wish');
      }

      console.log(response);

      const data = await response.json();
      // Navigate to the panel page with the fetched data
      router.push(`/${slug}/panel`, { query: { data: JSON.stringify(data) } });
    } catch (error) {
      console.error('Error submitting wish:', error);
    }
  };

  return (
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
  );
}
