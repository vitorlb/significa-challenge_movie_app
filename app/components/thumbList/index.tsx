"use client";
import { useState, useEffect } from "react";
import Thumb from "../thumbnail";
import ViewModeBtn from "../viewModeBtn";
import SearchInput from "../searchInput";
import styles from "./style.module.scss"


export default function ThumbList({ query, hideSearch, favourites }: { query?: string, hideSearch?: boolean, favourites?: boolean }) {
  const [results, setResults]: [results: any, setResults: any] = useState(null);
  const [viewFlag, setViewFlag]: [viewFlag: boolean, setViewFlag: any] = useState(false);
  const [display, setDisplay]: [display: 'list' | null, setDisplay: any] = useState(null);
  const [localQuery, setLocalQuery]: [localQuery: string | null, setLocalQuery: any] = useState(!!query ? query : null);
  const getMoviesData = async () => {
    const res = await fetch('/api/movieSearch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: localQuery })
    });
    const data = await res.json();
    return data
  }

  const getFavouriteMovies = async () => {
    const res = await fetch('/api/getFavourites', {
      method: 'GET'
    });
    const data = await res.json();
    return data
  }

  const getTrendingMovies = async () => {
    const res = await fetch('/api/getTrending', {
      method: 'GET'
    });
    const data = await res.json();
    return data
  }

  useEffect(() => {
    if (!!favourites) {
      getFavouriteMovies().then(data => {
        const processArr = data.data.map((e: any) => {
          return { id: e }
        })
        setResults({ data: processArr });
      })
    } else {
      if (!!localQuery) {
        getMoviesData().then(data => {
          setResults(data);
        });
      } else {
        getTrendingMovies().then(data => {
          setResults({ data: data?.results });
        })
      }
    }
  }, []);

  useEffect(() => {
    !!viewFlag
      ? setDisplay('list')
      : setDisplay(null)
  }, [viewFlag]);



  useEffect(() => {
    !!localQuery?.length && getMoviesData().then(data => {
      setResults(data);
    });
    (!localQuery && !favourites) && getTrendingMovies().then(data => {
      setResults({ data: data?.results });
    })
  }, [localQuery]);

  return (
    <div className="thumb-list-wrapper">
      <div className={`search-bar-wrapper d-flex sig-column-gap-2 mt-4 ${!!hideSearch ? 'justify-content-between align-items-center' : ''}`}>
        {!hideSearch && <SearchInput action={setLocalQuery} />}
        {!!hideSearch && <h3 className="m-0">Your favourites ✨</h3>}
        <ViewModeBtn mode={viewFlag} action={setViewFlag} />
      </div>
      {!!results?.data && <div className={`
      d-flex flex-nowrap pt-3
      ${styles['thumb-list']} ${!display ? `${styles['thumb-list--carousel']}` : `${styles['thumb-list--list']}`}
      ${display == 'list' ? 'flex-column sig-row-gap-2' : 'flex-nowrap sig-column-gap-1'}
    `}>
        {results?.data?.map((e: any, index: number) => {
          return <div key={`map-thumbs-${e.id}-${index}`} className={`${styles['thumb-list__item']}`}>
            <Thumb mode={display == 'list' ? 'horizontal' : null} id={e.id} />
          </div>
        })}
        {!results?.data?.length && <h3>We found nothing with such terms 😓</h3>}
      </div>}</div>
  );
}
