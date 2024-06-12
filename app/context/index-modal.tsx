"use client"
import { createContext, useState, useContext } from "react";
const ModalContext = createContext<any>(undefined);

export function ModalContextWrapper({ children }: { children: React.ReactNode }) {
  let [modalPath, setModalPath] = useState(null);
  let [modalOpened, setModalOpened] = useState(false);
  return (
    <ModalContext.Provider value={{
      modalPath,
      setModalPath,
      modalOpened,
      setModalOpened,
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModalContext() {
  return useContext(ModalContext);
}