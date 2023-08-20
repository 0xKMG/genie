import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="container mx-auto px-4">
    {children}
    <h1> Testing </h1>
  </div>
);

export default Layout;
