
"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { AppContextProps, AppContextValues } from "./defs";

const AppContext = createContext<AppContextValues | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Please wrap your App by ContextProvider");
  }

  return context;
};

export function AppContextProvider({ children }: AppContextProps) {
  const [isModalInView, setIsModalInView] = useState(false);

  const handleOpenModal = () => {
    setIsModalInView(true);
  };
  const handleCloseModal = () => {
    setIsModalInView(false);
  };

  const value = useMemo(
    () => ({
      isModalInView,
      handleOpenModal,
      handleCloseModal,
    }),
    [isModalInView]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
