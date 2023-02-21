import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxsPz1OT9-TeWI8178H0-j7vnNlC4FCXg",
  authDomain: "reddit-818ce.firebaseapp.com",
  projectId: "reddit-818ce",
  storageBucket: "reddit-818ce.appspot.com",
  messagingSenderId: "139287974627",
  appId: "1:139287974627:web:912f5fa0fb0d3dae76abd6"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);


export const postref = collection(db, "posts");
export const usersref = collection(db, "user");

export default app;