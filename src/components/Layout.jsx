// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container mt-4">
        <Outlet />
      </main>
      <footer className="bg-dark text-white text-center py-3 mt-5">
        &copy; 2025 MySite. All rights reserved.
      </footer>
    </>
  );
};

export default Layout;
