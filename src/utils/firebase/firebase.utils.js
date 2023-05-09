import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVcdC-m_zWtn1y4Zpr13ktean9uO7Lqqo",
    authDomain: "react-store-143b3.firebaseapp.com",
    projectId: "react-store-143b3",
    storageBucket: "react-store-143b3.appspot.com",
    messagingSenderId: "2808307998",
    appId: "1:2808307998:web:6e7a2f0d61e3de2b41290f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);