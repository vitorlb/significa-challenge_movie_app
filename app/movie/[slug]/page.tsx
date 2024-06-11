"use client"

import Thumb from "@/app/components/thumbnail";
import PageFrame from "@/app/components/pageFrame";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
export default function Movie() {
  const [results, setResults]: [results: any, setResults: any] = useState(null);
  const params = useParams();
  const handleSubmit = async () => {
    const res = await fetch(`${window.location.protocol}//${window.location.host}`);
  }
  handleSubmit();
  const getMoviesData = async (slug?: any) => {
    const res = await fetch('/api/getSynopse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ movieId: slug })
    });
    const data = await res.json();
    return data
  }
  useEffect(() => {
    !!params.slug && getMoviesData(params.slug).then(data => {
      setResults({ tagline: data.tagline, synopse: data.overview });
    })
  }, [])
  return (
    <PageFrame>
      <h1 className="m-0 pt-4"> <a className="reset-link sig-color-black" href="/">Cosmic frame 🛰️</a></h1>
      <span className="pt-1 sig-text-label">To infinty, and beyond!</span>
      <div className="sig-movie-detail mt-4">
        {!!(results?.tagline) ? <><Thumb mode={'headline'} id={params.slug} hideDetailBtn={true} />
         <div className="sig-movie-detail__data mt-3">
          <h4 className="sig-color-primary"><em>"{results.tagline}"</em></h4>
          <p>{results.synopse}</p>
        </div></> : <h3>Page not found 😓</h3>}
        <div className="sig-movie-detail__go-back mt-4">
          <a className="sig-color-black" href="/"><span className="sig-text-label--light sig-color-black">← Go back</span></a>
        </div>
      </div>
    </PageFrame>
  );
}
