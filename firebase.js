import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBRPCPSuQqvz-xVGoPGMXkrKIWU4b0oQ3E",
  authDomain: "tempest-united.firebaseapp.com",
  projectId: "tempest-united",
  storageBucket: "tempest-united.firebasestorage.app",
  messagingSenderId: "973516521045",
  appId: "1:973516521045:web:79ae1fe39f6559f5b85edc",
  measurementId: "G-J804WMKPLN"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };