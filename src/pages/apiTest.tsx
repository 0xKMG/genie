// pages/api-demo.js
import React, { useEffect, useState } from 'react';

const APIDemo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://b726-218-189-75-29.ngrok-free.app/dummy_members',
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
      <pre>{data}</pre>
    </div>
  );
};

export default APIDemo;
