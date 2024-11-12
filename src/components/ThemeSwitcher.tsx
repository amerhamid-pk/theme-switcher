// src/components/ThemeSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiSettings } from "react-icons/fi";

export default function ThemeSwticher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  console.log('switching theme');

  useEffect(() => {
    setMounted(true);
    // Set the initial theme class
    if (!resolvedTheme) {
      setTheme('brand');
    }
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    if (mounted) {
      document.documentElement.className = resolvedTheme || ''; // Set the class based on the resolved theme
    }
  }, [mounted, resolvedTheme]);

  if (!mounted) {
    return <div className="w-10 h-10" />; // Placeholder with fixed size
  }

  const handleThemeChange = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark');
    } else if (resolvedTheme === 'dark') {
      setTheme('brand');
    } else {
      setTheme('light');
    }
  };

  return (
    <button
      onClick={handleThemeChange}
      aria-label="Toggle Theme"
      className="relative w-10 h-10 flex items-center justify-center" // Fixed size for button
    >
      {/* Use absolute positioning and opacity to prevent layout shifts */}
      <FiMoon
        className={`absolute transition-opacity duration-300 ${resolvedTheme === 'light' ? 'opacity-100' : 'opacity-0'}`}
        style={{ width: '20px', height: '20px' }}
      />
      <FiSettings
        className={`absolute transition-opacity duration-300 ${resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
        style={{ width: '20px', height: '20px' }}
      />
      <FiSun
        className={`absolute transition-opacity duration-300 ${resolvedTheme === 'brand' ? 'opacity-100' : 'opacity-0'}`}
        style={{ width: '20px', height: '20px' }}
      />
    </button>
  );
}
