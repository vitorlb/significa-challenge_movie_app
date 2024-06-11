// @ts-nocheck
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { db } from "../../firebaseconfig";
import { collection, addDoc, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";

export async function GET(request: Request) {
 
  try {
    const favouritesRef = collection(db, "favourites");
    const querySnapshot = await getDocs(favouritesRef);
    const favouriteIds = querySnapshot.docs.map(doc => doc.data().id);
    console.log('GOT DATA -->' , favouriteIds)
    return Response.json( {data: favouriteIds} )
  } catch (error) {
    console.log('Error getting favourite IDs:', error);
    return false;
  }
     
}
