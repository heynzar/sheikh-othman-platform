"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { firstYearData } from "@/utils/AppData";

type DataCheck = {
  id: number;
  title: string;
  videoLink: string;
  pdfLink: string;
  duration: string;
  isChecked: boolean;
}[];

interface CheckContextType {
  dataCheck: DataCheck;
  setDataCheck: React.Dispatch<React.SetStateAction<DataCheck>>;
}

const CheckContext = createContext<CheckContextType | undefined>(undefined);

export const useCheckContext = () => {
  const context = useContext(CheckContext);
  if (!context) {
    throw new Error("useCheckContext must be used within a CheckProvider");
  }
  return context;
};

export default function CheckProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dataCheck, setDataCheck] = useState(firstYearData);

  useEffect(() => {
    const data = window.localStorage.getItem("APP_DATA");
    if (data !== null) {
      setDataCheck(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("APP_DATA", JSON.stringify(dataCheck));
  }, [dataCheck]);

  return (
    <CheckContext.Provider value={{ dataCheck, setDataCheck }}>
      {children}
    </CheckContext.Provider>
  );
}
