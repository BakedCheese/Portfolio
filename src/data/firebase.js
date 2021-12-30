// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyF4pP12dj9ktanN6kKCeMw2Pr7d62rc4",
  authDomain: "portfolio-bakedcheese.firebaseapp.com",
  projectId: "portfolio-bakedcheese",
  storageBucket: "portfolio-bakedcheese.appspot.com",
  messagingSenderId: "392101833653",
  appId: "1:392101833653:web:b923c88a7b813870a407fc",
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

// Create a storage reference from our storage service
const storageRef = ref(storage);
