"use client";

import { useEffect, useState } from "react";

export default function TrailerBtn({ id }: { id: number }) {
  const [trailerObj, setTrailerObj]: [trailerObj: any, setTrailerObj: any] = useState(null);
  const [trailerPath, setTrailerPath]: [trailerPath: any, setTrailerPath: any] = useState(null);
  const [trailerUnavailable, setTrailerUnavailable]: [trailerUnavailable:boolean, setTrailerUnavailable:any] = useState(false)
  const getMovieData = async () => {
    const res = await fetch('/api/movieTrailer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ movieId: id })
    });
    const data = await res.json();
    return data
  }

  useEffect(() => {
    getMovieData().then(data => {
      setTrailerObj(data);
    });
  }, [])


  useEffect(() => {
    let getTrailer = null
    !!trailerObj?.data?.results?.length
      && (getTrailer = trailerObj?.data?.results?.filter((e: any) => { return e.name == 'Official Trailer' }));
    !!getTrailer && (getTrailer = getTrailer[0]);
    !!getTrailer?.key && setTrailerPath(getTrailer.key);
    (!getTrailer) && setTrailerUnavailable(true)
  }, [trailerObj])
  useEffect(() => {
    console.log('GOT trailerPath-------------------->', trailerPath)
  }, [trailerPath])


  return (
    <button className={`px-1 sig-actions-button favourite-button reset-button`}>
      <span onClick={() => { }} className={`
        material-symbols-outlined material-symbols-outlined--bold sig-font-size-4--half d-block
      `}>videocam</span>
    </button>
  );
}
