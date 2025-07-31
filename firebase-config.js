// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCaf2VoxmDv-zSpJRInRNSHb2QbR-6f-dg",
  authDomain: "gestionedpi-df811.firebaseapp.com",
  projectId: "gestionedpi-df811",
  storageBucket: "gestionedpi-df811.firebasestorage.app",
  messagingSenderId: "276270766980",
  appId: "1:276270766980:web:fa8850c6d573b947571bd1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };