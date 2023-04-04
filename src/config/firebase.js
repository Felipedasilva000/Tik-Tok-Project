
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAQTsTd0g_lzC6ptMh1rsJ3skC92LlV-LA",
  authDomain: "tiktok---jornada-7397c.firebaseapp.com",
  projectId: "tiktok---jornada-7397c",
  storageBucket: "tiktok---jornada-7397c.appspot.com",
  messagingSenderId: "1069408244768",
  appId: "1:1069408244768:web:c883d8992f168668e09845"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;