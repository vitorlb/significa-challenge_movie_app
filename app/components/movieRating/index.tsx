"use client";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";

export default function MovieRating({ movieId }: { movieId: number }) {
  const [init, setInit]: [init: any, setInit: any] = useState(false);
  const [reviewsArr, setReviewsArr]: [reviewsArr: any, setReviewsArr: any] = useState(null);
  const [movieAverage, setMovieAverage]: [reviewsArr: any, setReviewsArr: any] = useState(null);
  const getReviews = async () => {
    const res = await fetch('/api/movieRatings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ movieId: movieId })
    });
    const data = await res.json();
    return data
  }
  useEffect(() => {
    getReviews().then(data => {
      setReviewsArr(data);
    });
  }, [])
  useEffect(() => {
    let revAverage: any = null
    !!reviewsArr?.data?.length && (revAverage = reviewsArr.data.map((e: any) => {
      return e.author_details.rating
    }));
    !!reviewsArr?.data?.length && (revAverage = revAverage.reduce((accum: any, curr: any) => accum + curr, 0));
    !!revAverage && (revAverage = revAverage / reviewsArr?.data?.length);
    setMovieAverage(revAverage);
    setInit(true)
  }, [reviewsArr])
  return (
    <>
      {!!init && <span className="d-inline-flex align-items-center sig-tilt-t-1">
        {!movieAverage && <span className="material-symbols-outlined material-symbols-outlined--bold sig-color-primary sig-font-size-5--half sig-filter-grayscale">mode_heat</span>}
        {movieAverage > 0 && <span className="material-symbols-outlined material-symbols-outlined--bold sig-color-primary sig-font-size-5--half">
          mode_heat
        </span>}
        {movieAverage > 5 && <span className="material-symbols-outlined material-symbols-outlined--bold sig-color-primary sig-font-size-5--half">
          mode_heat
        </span>}
        {movieAverage > 8 && <span className="material-symbols-outlined material-symbols-outlined--bold sig-color-primary sig-font-size-5--half">
          mode_heat
        </span>}
      </span>}
    </>
  );
}
