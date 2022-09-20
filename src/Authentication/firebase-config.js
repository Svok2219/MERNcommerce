import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyDh_JV8gVte5ckjnMW527vVulF0AS2rNBQ",
  
    authDomain: "merncommerce.firebaseapp.com",
  
    projectId: "merncommerce",
  
    storageBucket: "merncommerce.appspot.com",
  
    messagingSenderId: "1033307717759",
  
    appId: "1:1033307717759:web:ef18ab9b0ba085b8f7bf4a"
  
  };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);