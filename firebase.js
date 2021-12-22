import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTm5KF06MQd_v3MzrUYIaVY3m7HIXPq_o",
  authDomain: "insta-practice-project.firebaseapp.com",
  projectId: "insta-practice-project",
  storageBucket: "insta-practice-project.appspot.com",
  messagingSenderId: "193892440860",
  appId: "1:193892440860:web:47a1de2e40243b352ab8d9",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
