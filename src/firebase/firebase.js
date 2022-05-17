import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAmIm0u7OiOhCkbbM-oqyl52OTm610QJCw",
    authDomain: "thanhhouseacademy-d4f12.firebaseapp.com",
    projectId: "thanhhouseacademy-d4f12",
    storageBucket: "thanhhouseacademy-d4f12.appspot.com",
    messagingSenderId: "127403676263",
    appId: "1:127403676263:web:4115283136dc3b3561bac2",
    measurementId: "G-B29DNPMT4V"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };