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
      'http://112.119.146.38:8000/ask_genie_suhk?query=I%20wish%20to%20find%20a%20ux%20designer&model=gpt-4',
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
