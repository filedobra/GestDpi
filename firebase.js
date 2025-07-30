// firebase.js

const firebaseConfig = {
  apiKey: "AIzaSyBM7L7qFBYCYBd-rDxukZVQOHOh16uCW0A",
  authDomain: "gestdpi-a01af.firebaseapp.com",
  projectId: "gestdpi-a01af",
  storageBucket: "gestdpi-a01af.firebasestorage.app",
  messagingSenderId: "668007277135",
  appId: "1:668007277135:web:c816fb96a6ded8af7e803a"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// 🔐 Login
function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => alert("Login riuscito: " + result.user.displayName))
    .catch(console.error);
}

function loginWithEmail(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(user => alert("Accesso: " + user.user.email))
    .catch(console.error);
}

// 👷 Lavoratori
function addWorker(worker) {
  return db.collection("lavoratori").add(worker);
}

function listenWorkers(callback) {
  return db.collection("lavoratori").onSnapshot(snapshot => {
    const data = [];
    snapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }));
    callback(data);
  });
}

// 🦺 DPI
function addDPI(dpi) {
  return db.collection("dpi").add(dpi);
}

function listenDPI(callback) {
  return db.collection("dpi").onSnapshot(snapshot => {
    const data = [];
    snapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }));
    callback(data);
  });
}

// 📦 Consegne
function addDeliveryList(consegne) {
  const batch = db.batch();
  consegne.forEach(item => {
    const ref = db.collection("consegne").doc();
    batch.set(ref, item);
  });
  return batch.commit();
}

function listenDeliveries(callback) {
  return db.collection("consegne").onSnapshot(snapshot => {
    const data = [];
    snapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }));
    callback(data);
  });
}
