import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="container mx-auto px-4">
    {children}

    <div className="mt-4 flex justify-center"></div>
  </div>
);

export default Layout;
