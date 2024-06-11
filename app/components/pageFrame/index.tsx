"use client";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";

export default function PageFrame({ children }: { children: any }) {

  return (
    <main className="pb-5">
      <div className={`container`}>
        {children}
        <span className="sig-text-label mt-4">Made with ❤️ by Vitor Branco</span>
      </div>
    </main>
  );
}
