"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context state
interface CheckedContextType {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with an initial value
const CheckedContext = createContext<CheckedContextType | undefined>(undefined);

// Provider component that wraps the app and provides the state
export const CheckedProvider = ({ children }: { children: ReactNode }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckedContext.Provider value={{ isChecked, setIsChecked }}>
      {children}
    </CheckedContext.Provider>
  );
};

// Custom hook to use the context in any component
export const useChecked = () => {
  const context = useContext(CheckedContext);
  if (!context) {
    throw new Error("useChecked must be used within a CheckedProvider");
  }
  return context;
};
