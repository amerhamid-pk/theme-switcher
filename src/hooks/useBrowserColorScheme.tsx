'use client'
import { useState, useEffect } from 'react';

const useBrowserColorScheme = () => {
  const [browserColorScheme, setBrowserColorScheme] = useState('light');

  useEffect(() => {
    const browserMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');

    const handleBrowserChange = (event) => {
      setBrowserColorScheme(event.matches ? 'dark' : 'light');
    };

    // Initial value
    setBrowserColorScheme(browserMatchMedia.matches ? 'dark' : 'light');

    // Event listener
    browserMatchMedia.addEventListener('change', handleBrowserChange);

    return () => {
      browserMatchMedia.removeEventListener('change', handleBrowserChange);
    };
  }, []);

  return browserColorScheme;
};

export default useBrowserColorScheme;
