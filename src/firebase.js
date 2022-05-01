import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1asCwACVspTCArn5dHhifJru5Ep3vMmI",
  authDomain: "fir-authentication-775d2.firebaseapp.com",
  projectId: "fir-authentication-775d2",
  storageBucket: "fir-authentication-775d2.appspot.com",
  messagingSenderId: "1017542514401",
  appId: "1:1017542514401:web:6105e0f8fa4cac6bf209a0",
  measurementId: "G-N7CXX1J56K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;