import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDjIVDKeO-3w-k1EALCYoIKg2dqq3Icr6o",
  authDomain: "sociallogin-5f338.firebaseapp.com",
  projectId: "sociallogin-5f338",
  storageBucket: "sociallogin-5f338.appspot.com",
  messagingSenderId: "689245313809",
  appId: "1:689245313809:web:679ea77456e9fa26a68ab0"
};

initializeApp(firebaseConfig);

export const auth=getAuth();
export const google=new GoogleAuthProvider();

