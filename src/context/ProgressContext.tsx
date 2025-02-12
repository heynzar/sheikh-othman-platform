"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Define the shape of the progress object
type VideoProgress = {
  id: number;
  progress: number; // In percentage
  currentTime: number; // In seconds
}[];

// Define the context type
interface ProgressContextType {
  progressData: VideoProgress;
  updateProgress: (id: number, progress: number, currentTime: number) => void;
}

// Create the context
const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined
);

// Custom hook to access the context
export const useProgressContext = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error(
      "useProgressContext must be used within a ProgressProvider"
    );
  }
  return context;
};

// Progress Provider Component
export default function ProgressProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize state
  const [progressData, setProgressData] = useState<VideoProgress>(
    Array.from({ length: 39 }, (_, index) => ({
      id: index + 1,
      progress: 0,
      currentTime: 0,
    }))
  );

  // Load progress data from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem("VIDEO_PROGRESS");
    if (storedData) {
      setProgressData(JSON.parse(storedData));
    }
  }, []);

  // Save progress data to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("VIDEO_PROGRESS", JSON.stringify(progressData));
  }, [progressData]);

  // Function to update progress
  const updateProgress = (
    id: number,
    progress: number,
    currentTime: number
  ) => {
    setProgressData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, progress, currentTime } : item
      )
    );
  };

  return (
    <ProgressContext.Provider value={{ progressData, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}
