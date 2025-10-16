'use client';

import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ✅ Apply theme immediately on mount (before painting)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const dark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    setIsDark(dark);

    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Mark as mounted after applying theme
    setMounted(true);
  }, []);

  // ✅ Toggle theme function
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // ✅ Hide the component until mounted (no flicker)
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="group relative w-12 h-12 bg-[#FAF6F3] dark:bg-[#2A1E19] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 border border-[#8C7E77]/20 dark:border-[#B8B0AC]/20 hover:border-[#C9A47A] dark:hover:border-[#C9A47A]"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A47A]/20 to-[#8C7E77]/20 dark:from-[#C9A47A]/30 dark:to-[#8C7E77]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icon */}
      <div className="relative z-10 transition-all duration-500 ease-in-out">
        {isDark ? (
          <svg
            className="w-5 h-5 text-[#F5F2EF] transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2.61A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05z" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-[#2A1E19] transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        )}
      </div>
    </button>
  );
}
