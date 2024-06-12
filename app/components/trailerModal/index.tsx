"use client";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { useModalContext } from "@/app/context/index-modal";

export default function TrailerModal({ }) {
  const { modalPath, modalOpened, setModalOpened } = useModalContext(); 

  return (
    <div style={{ display: modalOpened ? 'flex' : 'none' }} className={`${styles['sig-trailer-modal']} sig-trailer-modal align-items-center justify-content-center`}>
      <span  className={`${styles['sig-trailer-modal__close-btn']} material-symbols-outlined`} onClick={() => setModalOpened(false)}>
        cancel
      </span>
      {!!modalPath && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${modalPath}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}
    </div>
  );
}
