// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcxIEKKH554RLpR0x4QU8lrj9sYAviHkI",
  authDomain: "fir-2nd-project-82d7a.firebaseapp.com",
  projectId: "fir-2nd-project-82d7a",
  storageBucket: "fir-2nd-project-82d7a.appspot.com",
  messagingSenderId: "168769117441",
  appId: "1:168769117441:web:66faaf339316591918cf00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth