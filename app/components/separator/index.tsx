"use client";
import styles from './style.module.scss'
import { useEffect, useState } from "react";
import MovieRating from "../movieRating";

export default function Separator({ spacing }: { spacing: number }) {
  const [movieObj, setMovieObj]: [movieObj: any, setMovieObj: any] = useState(null);

  return (
    <div className={`flexone w-100 d-flex align-items-center ${`py-${spacing}`}`}>
      <div className={`${styles['sig-divisor']} w-100`}></div>
    </div>
  );
}
