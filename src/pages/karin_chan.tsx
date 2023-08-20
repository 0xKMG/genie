import React, { useEffect, useState } from 'react';

type APIError = {
  message: string;
};

function About() {
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [apiError, setApiError] = useState<APIError | null>(null);

  useEffect(() => {
    fetch(
      'https://6d88-85-203-21-98.ngrok-free.app/ask_genie_suhk?query=find%20the%20smartest%20person&model=gpt-4',
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        setApiData(responseData);
        setLoading(false);
      })
      .catch((err) => {
        setApiError({ message: err.message });
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (apiError) return <div>Error: {apiError.message}</div>;

  return (
    <div>
      <h2>Data from API</h2>
      <pre>{JSON.stringify(apiData, null, 2)}</pre>
    </div>
  );
}

export default About;
