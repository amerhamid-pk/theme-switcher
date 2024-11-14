// src/components/ThemeSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  console.log('switching theme');

  useEffect(() => {
    setMounted(true);
    // Set the initial theme class
    if (!resolvedTheme) {
      setTheme('default');
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
    if (resolvedTheme === 'alternate') {
      setTheme('default');
    } else {
      setTheme('alternate');
    }
  };

  return (
    <button
      onClick={handleThemeChange}
      aria-label="Toggle Theme"
      className="relative w-10 h-10 flex items-center justify-center" // Fixed size for button
    >
      {/* Use absolute positioning and opacity to prevent layout shifts */}
      <FiSun
        className={`absolute text-headerText transition-opacity duration-300 ${resolvedTheme === 'default' ? 'opacity-0' : 'opacity-100'}`}
        style={{ width: '20px', height: '20px' }}
      />
      <FiMoon
        className={`absolute text-headerText transition-opacity duration-300 ${resolvedTheme === 'alternate' ? 'opacity-0' : 'opacity-100'}`}
        style={{ width: '20px', height: '20px' }}
      />
    </button>
  );
}
