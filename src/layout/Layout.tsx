import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="container mx-auto px-4">
    {children}

    <div className="mt-4 flex justify-center">
      <a
        href="swhk.geniefriends.io"
        className="rounded bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700"
      >
        Make Your Wish
      </a>
    </div>
  </div>
);

export default Layout;
