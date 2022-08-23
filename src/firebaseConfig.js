// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPm6SWHORFvdnWc9FheCooGGOn8Jss5to",
  authDomain: "ecommerce-friki-remeras.firebaseapp.com",
  projectId: "ecommerce-friki-remeras",
  storageBucket: "ecommerce-friki-remeras.appspot.com",
  messagingSenderId: "294843245725",
  appId: "1:294843245725:web:c9404d95208de75cebe074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app)

export default db