// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";

/* import { firestore } from "firebase/firestore"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  browserLocalPersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSzPt4NwLWg1v2Rl2xyG0GeVs5q4_ijzk",
  authDomain: "projectklarferdigstopp.firebaseapp.com",
  projectId: "projectklarferdigstopp",
  storageBucket: "projectklarferdigstopp.appspot.com",
  messagingSenderId: "275544188071",
  appId: "1:275544188071:web:83a00b8397c5f7c1d3a782",
  measurementId: "G-Y5MZTJVNEE",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
});

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
/* export const FIREBASE_FIRESTORE = firestore(FIREBASE_APP); */
export const analytics = getAnalytics(FIREBASE_APP);
