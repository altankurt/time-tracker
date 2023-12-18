import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyCPbVvBnHJxKXP3UqeDI6B7PCq0TWIQRgs',
  authDomain: 'time-tracker-epigra.firebaseapp.com',
  projectId: 'time-tracker-epigra',
  storageBucket: 'time-tracker-epigra.appspot.com',
  messagingSenderId: '102649970067',
  appId: '1:102649970067:web:bad5c8c43a39a152d6bc66',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };