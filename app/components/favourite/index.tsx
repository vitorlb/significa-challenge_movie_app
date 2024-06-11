"use client";

import styles from "./style.module.scss";
import { useEffect, useState } from "react";

import { db } from "../../firebaseconfig"
import { collection, addDoc, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";

async function checkFavourite(movieId: any) {
  try {
    const favouritesRef = collection(db, "favourites");
    const q = query(favouritesRef, where("id", "==", movieId));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return true;
    }
  } catch {
    return false;
  }
}

async function addFavourite(movieId: any) {
  try {
    const favouritesRef = collection(db, "favourites");
    const q = query(favouritesRef, where("id", "==", movieId));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      querySnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, "favourites", document.id));
      });
      return false;
    } else {
      await addDoc(favouritesRef, { id: movieId });
      return true;
    }
  } catch (error) {
    return false;
  }
}
export default function Favourite({ id, tagged }: { id: number, tagged?: boolean }) {
  const [isFav, setIsFav]: [isFav: boolean, setIsFav: any] = useState(false);
  const addFav = async (e: any) => {
    e.preventDefault();
    const added = await addFavourite(id)
    if (added) {
      setIsFav(true)
    } else {
      setIsFav(false)
    }
  }
  const checkFav = async () => {
    const check = await checkFavourite(id);
    if (check) {
      setIsFav(true);
    }
  }
  useEffect(() => {
    checkFav()
  }, [])
  return (
    <button className={`px-1 sig-actions-button favourite-button reset-button 
    ${!!isFav ? 'favourite-button--active' : ''}`}>
      <span onClick={addFav} className={`
        material-symbols-outlined material-symbols-outlined--filled sig-font-size-4--half d-block
      `}>
        star
      </span>
    </button>
  );
}
