
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASPOxvLSFZmVq2rYrN8p-mdRvE88SsUPo",
  authDomain: "federal-file-storage.firebaseapp.com",
  projectId: "federal-file-storage",
  storageBucket: "federal-file-storage.appspot.com",
  messagingSenderId: "842780690578",
  appId: "1:842780690578:web:6394be51dbe2e7cfd3be4b",
  measurementId: "G-WZVJ33FGSK"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};