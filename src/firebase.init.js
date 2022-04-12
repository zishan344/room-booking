// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYUokDfhyXC3vvrbZGnHa4Brdgqg4oonU",
  authDomain: "one-side-roam-booking.firebaseapp.com",
  projectId: "one-side-roam-booking",
  storageBucket: "one-side-roam-booking.appspot.com",
  messagingSenderId: "227912038330",
  appId: "1:227912038330:web:ab3a46c6bdc66804780f83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
