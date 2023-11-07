import Head from 'next/head';
import React from 'react';

const Wish = () => {
  return (
    <div className="font-serif">
      <Head>
        <title>Make a Genie Wish</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="flex h-screen flex-col items-center justify-center bg-default px-6 text-center">
        <h1 className="mb-8 text-4xl font-bold">Make a Genie Wish</h1>
        <div className="mb-6 flex justify-center">
          <div className="inline-block">
            <img
              className="mb-4 h-40 w-40"
              src="/assets/lamp2.jpg"
              alt="GenieFriends"
            />
          </div>
        </div>
        <input
          type="text"
          className="mb-6 w-1/2 rounded-md border border-gray-300 bg-default p-2 shadow-md focus:border-blue-300 focus:outline-none focus:ring"
          placeholder="I wish to meet someone rich and handsome..."
        />
        <button className="mb-6 rounded-full bg-gray-200 px-6 py-2 text-black transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-300 hover:shadow-outline focus:outline-none focus:ring">
          Rub The Lamp...
        </button>

        <p className="mb-6 text-lg">Some random text</p>
        <a href="" className="text-blue-600 hover:underline">
          want to write a letter? submit here
        </a>
      </main>
    </div>
  );
};

export default Wish;
