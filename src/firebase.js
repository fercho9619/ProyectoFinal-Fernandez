import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAHL3a1Yt9TdrnQto1OsPN9081EvTzUzfM",
    authDomain: "myaremy-d1ee4.firebaseapp.com",
    projectId: "myaremy-d1ee4",
    storageBucket: "myaremy-d1ee4.firebasestorage.app",
    messagingSenderId: "158467854379",
    appId: "1:158467854379:web:98bb030d48348a077b9a6e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
