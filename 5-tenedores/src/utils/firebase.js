import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANriOOJDZlc0PjPYVY0S-0SY7FOWkqUtE",
  authDomain: "tenedores-8e7af.firebaseapp.com",
  projectId: "tenedores-8e7af",
  storageBucket: "tenedores-8e7af.appspot.com",
  messagingSenderId: "77200921944",
  appId: "1:77200921944:web:6d7e6872129644a397812d",
};

export const initFirebase = initializeApp(firebaseConfig);
