// src/app/page.tsx
import React from 'react';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <div className="relative py-4 px-6 flex items-center justify-between" style={{ backgroundColor: 'var(--primary)', color: 'var(--foreground)' }}>
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:underline" style={{ color: 'var(--foreground)' }}>Home</a>
          <a href="#" className="hover:underline" style={{ color: 'var(--foreground)' }}>About</a>
          <a href="#" className="hover:underline" style={{ color: 'var(--foreground)' }}>Services</a>
          <a href="#" className="hover:underline" style={{ color: 'var(--foreground)' }}>Contact</a>
          <div className="relative z-50">
            <ThemeSwitcher />
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative text-center py-20 md:py-40" style={{ backgroundColor: 'var(--background)' }}>
        <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: 'var(--primary)' }}>Welcome to My Website</h2>
        <p className="text-lg md:text-2xl max-w-lg mx-auto" style={{ color: 'var(--foreground)' }}>
          Discover the best services and products tailored just for you.
        </p>
        <button
          className="mt-8 px-6 py-2 rounded hover:opacity-80"
          style={{ backgroundColor: 'var(--primary)', color: 'var(--foreground)' }}
        >
          Learn More
        </button>
      </div>

      {/* Responsive Grid Section */}
      <div className="py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="p-6 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
            <h3 className="text-xl font-semibold mb-2">Feature {i + 1}</h3>
            <p>This is a description of feature {i + 1}, responsive at various breakpoints.</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="py-6 text-center" style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </div>
    </>
  );
};

export default HomePage;