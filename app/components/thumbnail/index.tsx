"use client";

import { useEffect, useState } from "react";
import MovieRating from "../movieRating";
import Favourite from "../favourite";
import TrailerBtn from "../trailerBtn";
import DetailBtn from "../detailBtn";
export default function Thumb({ id, mode, hideDetailBtn }: { id: any, mode?: 'horizontal' | 'headline' | null, hideDetailBtn?: boolean }) {
  const [movieObj, setMovieObj]: [movieObj: any, setMovieObj: any] = useState(null);
  const getMovieData = async () => {
    const res = await fetch('/api/movieDetails', {
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
      setMovieObj(data);
    });
  }, [])

  return (
    <div className={`
      sig-thumb d-flex
      ${(mode == 'horizontal' || mode == 'headline') ? 'sig-thumb--horizontal sig-column-gap-2' : 'flex-column'}
      ${mode == 'headline' ? 'sig-thumb--horizontal sig-thumb--headline' : ''}
    `}>
        <div className={`
          sig-thumb__img-wrapper sig-thumb-frame
          ${(mode == 'horizontal' || mode == 'headline') ? 'sig-flex-2' : ''}
        `}> 
          {!!movieObj?.img?.posters?.length && <img className="w-100" src={`https://image.tmdb.org/t/p/original/${movieObj.img.posters[0].file_path}`} />}
        </div>
        <div className={`
          sig-thumb__data-wrapper sig-column-gap-1 d-flex flex-column 
         ${(mode == 'horizontal' || mode == 'headline') ? 'sig-flex-3' : ''}
         ${(mode != 'headline') ? 'pt-3' : ''}
        `}>
          {!!movieObj && <h1 className={`
            sig-bold-text m-0
          ${(mode == 'horizontal') ? 'sig-font-size-3' : 'sig-thumb-header'}
          ${(mode == 'headline') ? 'sig-font-size-5' : ''}
          `}>
           <span className="pe-1">{movieObj?.data?.original_title}</span> 
            <MovieRating movieId={id} />
          </h1>}
          <div className={`sig-thumb__actions d-flex sig-column-gap-1 pt-2`}>
            <Favourite id={id} />
            <TrailerBtn id={id} />
            {!hideDetailBtn && <DetailBtn id={id} />}
          </div>
        </div>
    </div>
  );
}
