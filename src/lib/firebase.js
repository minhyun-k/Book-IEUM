import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import { getMessaging, getToken } from "firebase/messaging";

// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);


let messaging;

if(typeof window !=="undefined" && typeof window.navigator !== 'unde'){
  messaging = getMessaging();
}

export const getClientToken = async ()=>{
  const key = 'BFcWrcDshqKp-WD6gBMkFuXopG8kBUgyDiBH_Sh43KPd-8W9Q-vfaR44Mom6jrOCVwME2SOSH9YER9ua5JFHuVU'
  const currentToken = getToken(messaging, { vapidKey: key })
  return currentToken;
}