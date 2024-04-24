// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_j-SvZg7anttWmKTkhyoSOORqlz0Ob4w",
  authDomain: "online-job-portal-bd2af.firebaseapp.com",
  projectId: "online-job-portal-bd2af",
  storageBucket: "online-job-portal-bd2af.appspot.com",
  messagingSenderId: "276181665564",
  appId: "1:276181665564:web:6368479f09e23070429cd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};