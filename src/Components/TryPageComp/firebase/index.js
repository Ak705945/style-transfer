import firebase from "firebase/app";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjMTvZmrU5QPnnx7uVogVtNu-Hitggumk",
  authDomain: "style-transfer-fb1de.firebaseapp.com",
  projectId: "style-transfer-fb1de",
  storageBucket: "style-transfer-fb1de.appspot.com",
  messagingSenderId: "84133723998",
  appId: "1:84133723998:web:d34b7e739383377c4bd9cf",
  measurementId: "G-58984BNY24",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
