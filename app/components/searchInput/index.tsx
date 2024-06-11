"use client";
import { useState, useEffect } from "react";
import styles from "./style.module.scss"

export default function SearchInput({ action }: { action: any }) {
  const [inputValue, setInputValue]: [inputValue: string, setInputValue: any] = useState('')
  useEffect(() => {
    !!inputValue.length && action(encodeURIComponent(inputValue))
    !inputValue.length && action(null)
  }, [inputValue]);

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };
  return (
    <div className={`${styles['sig-search-input-wrapper']} d-flex sig-column-gap-1`}>
      <input onBlur={handleChange} className={`${styles['sig-search-input']}`} type="text" placeholder="search for anything" />
      <span className="material-symbols-outlined material-symbols-outlined--bold d-flex align-items-center jsutify-content-center">
        search
      </span>
    </div>
  );
}
