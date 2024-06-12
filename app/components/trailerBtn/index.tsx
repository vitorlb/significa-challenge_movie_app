"use client";

import { useEffect, useState } from "react";
import { useModalContext } from "@/app/context/index-modal";

export default function TrailerBtn({ id }: { id: number }) {
  const { setModalPath, setModalOpened } = useModalContext();
  const [trailerObj, setTrailerObj]: [trailerObj: any, setTrailerObj: any] = useState(null);
  const [trailerPath, setTrailerPath]: [trailerPath: any, setTrailerPath: any] = useState(null);
  const [trailerUnavailable, setTrailerUnavailable]: [trailerUnavailable:boolean, setTrailerUnavailable:any] = useState(false);
  const getTrailerPath = (trailerObj:any):any => {
    let getTrailer = null
    !!trailerObj?.data?.results?.length
      && (getTrailer = trailerObj?.data?.results?.filter((e: any) => { return e.name.toLowerCase().includes("trailer") }));
    !!getTrailer && (getTrailer = getTrailer[0]);
    !!getTrailer?.key && setTrailerPath(getTrailer.key);
    !!getTrailer && setModalOpened(true);
    (!getTrailer) && setTrailerUnavailable(true);
  } 
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
    !!trailerPath && setModalPath(trailerPath);
  }, [trailerPath])


  return (
    <button className={`px-1 sig-actions-button favourite-button trailer-button reset-button ${!!trailerUnavailable ? 'trailer-button--inactive' : ''}`}>
      <span onClick={() => getTrailerPath(trailerObj)} className={`
        material-symbols-outlined material-symbols-outlined--bold sig-font-size-4--half d-block
      `}>videocam</span>
    </button>
  );
}
