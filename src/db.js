import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAeDTxpPlqh6-yIi_aYvWJ-lK0u9SW8y3U",
    authDomain: "vue-firechat-1fa6e.firebaseapp.com",
    projectId: "vue-firechat-1fa6e",
    storageBucket: "vue-firechat-1fa6e.appspot.com",
    messagingSenderId: "937845266936",
    appId: "1:937845266936:web:8f16d8d8951078c26bde0d",
    databaseURL: "https://vue-firechat-1fa6e-default-rtdb.firebaseio.com/",
}

const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);
export default db;