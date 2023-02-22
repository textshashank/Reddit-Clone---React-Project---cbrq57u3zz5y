
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDGXdw-JIHUC1Wew5dBwO_7lEO0vqUxF7Q",
  authDomain: "newreddit-9e58e.firebaseapp.com",
  projectId: "newreddit-9e58e",
  storageBucket: "newreddit-9e58e.appspot.com",
  messagingSenderId: "783171205620",
  appId: "1:783171205620:web:1df5126a4b0a4a78f3a1a1"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export const postref = collection(db, "posts");
export const usersref = collection(db, "user");

export default app;