// pages/api-demo.js
import React, { useEffect, useState } from 'react';

interface ApiResponse {
  name: string;
  key: string;
  profile_pic: string;
  linkedin_url: string;
}

const APIDemo = () => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://ml.aska.ai/geniefriends/dummy_members?passcode=magic',
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch, status: ${response.status}`);
        }
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);
      } catch (error) {
        // Since TypeScript 4.0, errors are of type 'unknown'. So, we check if it's an instance of Error.
        if (error instanceof Error) {
          setFetchError(error.message);
        } else {
          // If it's not an Error instance, we can handle it as a string or however you see fit.
          setFetchError('An unexpected error occurred');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (fetchError) {
    return <div>Error: {fetchError}</div>;
  }

  // Once the data is fetched, render it
  return (
    <div>
      <h1>API Data</h1>
      {data && Array.isArray(data) ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <p>Name: {item.name}</p>
              <p>Key: {item.key}</p>
              <img src={item.profile_pic} alt={`Profile of ${item.name}`} />
              <p>
                LinkedIn:
                <a
                  href={item.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.linkedin_url}
                </a>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Data is not in the expected format.</p>
      )}
    </div>
  );
};

export default APIDemo;
