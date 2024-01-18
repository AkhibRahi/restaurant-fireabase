import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { data } from "autoprefixer";
import { async } from "@firebase/util";

export const saveItem = async (data) => {
  await setDoc(doc(db, "FoodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(db, "FoodItems"), orderBy("id", "desc"))
  );
  return items.docs.map((doc)=> doc.data());    
};
