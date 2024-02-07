import React, { createContext, useContext, useState } from "react";

interface SaveContextProps {
  savedMatchInfo: any;
  saveMatchInfo: (matchInfo: any) => void;
  clearSavedMatchInfo: () => void;
}

const SaveContext = createContext<SaveContextProps | undefined>(undefined);

export const SaveProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [savedMatchInfo, setSavedMatchInfo] = useState<any>(null);

  const saveMatchInfo = (matchInfo: any) => {
    setSavedMatchInfo(matchInfo);
  };

  const clearSavedMatchInfo = () => {
    setSavedMatchInfo(null);
  };

  return (
    <SaveContext.Provider
      value={{ savedMatchInfo, saveMatchInfo, clearSavedMatchInfo }}
    >
      {children}
    </SaveContext.Provider>
  );
};

export const useSave = () => {
  const context = useContext(SaveContext);
  if (!context) {
    throw new Error("useSave must be used within a SaveProvider");
  }
  return context;
};
