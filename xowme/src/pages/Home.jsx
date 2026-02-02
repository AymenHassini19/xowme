import React, { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center transition-colors"
          : "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 min-h-screen flex flex-col items-center justify-center transition-colors"
      }
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Xowme</h1>
      <p className="mb-6 text-lg">
        This is a simple React + Tailwind test page.
      </p>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-4 w-full max-w-5xl">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow hover:scale-105 transition-transform text-center"
          >
            <h2 className="text-xl font-semibold mb-2">Card {i}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This is a simple card for testing layout and Tailwind styles.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
