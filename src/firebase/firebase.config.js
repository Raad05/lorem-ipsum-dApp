// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuBENQ5utbbjor6IisE_AJY2IRp2Cyi54",
    authDomain: "lorem-ipsum-fecdb.firebaseapp.com",
    projectId: "lorem-ipsum-fecdb",
    storageBucket: "lorem-ipsum-fecdb.appspot.com",
    messagingSenderId: "922453773116",
    appId: "1:922453773116:web:92958e3c9e625560d32c39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;