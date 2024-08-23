import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDYwNmEiwcvkLMI2e5ET2e0BLZerfCFVVw",
  authDomain: "blog-f1864.firebaseapp.com",
  projectId: "blog-f1864",
  storageBucket: "blog-f1864.appspot.com",
  messagingSenderId: "163794311914",
  appId: "1:163794311914:web:8f8e967dbb3792de631593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };