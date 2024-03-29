import React from 'react';
import Head from 'next/head';
import Header from './component/Header';
import "tailwindcss/tailwind.css";

// Define metadata
const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
