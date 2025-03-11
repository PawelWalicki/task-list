// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_UjDPPwLfKgMyrQmdwm26yaaP5OW2mJE",
  authDomain: "kanban-d5e00.firebaseapp.com",
  databaseURL: "https://kanban-d5e00-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kanban-d5e00",
  storageBucket: "kanban-d5e00.firebasestorage.app",
  messagingSenderId: "681895031106",
  appId: "1:681895031106:web:303d2f8e040a5b093d58db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)
export default app