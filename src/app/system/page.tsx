'use client'
import useBrowserColorScheme from '@/hooks/useBrowserColorScheme';

const Page = () => {
  const browserColorScheme = useBrowserColorScheme();

  return (
    <div>
      <p>The current browser color scheme is {browserColorScheme} mode.</p>
    </div>
  );
};

export default Page;
