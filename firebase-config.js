// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBM7L7qFBYCYBd-rDxukZVQOHOh16uCW0A",
  authDomain: "gestdpi-a01af.firebaseapp.com",
  projectId: "gestdpi-a01af",
  storageBucket: "gestdpi-a01af.firebasestorage.app",
  messagingSenderId: "668007277135",
  appId: "1:668007277135:web:c816fb96a6ded8af7e803a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };