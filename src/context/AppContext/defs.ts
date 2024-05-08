import { ReactNode } from "react";

export interface AppContextProps {
  children: ReactNode;
}

export interface AppContextValues {
  isModalInView: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}
