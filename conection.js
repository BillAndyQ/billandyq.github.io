  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyDVktPKEqk7d0dxaGS4-A8cUtyMneziANE",

    authDomain: "autoimp.firebaseapp.com",

    databaseURL: "https://autoimp-default-rtdb.firebaseio.com",

    projectId: "autoimp",

    storageBucket: "autoimp.appspot.com",

    messagingSenderId: "1041116473120",

    appId: "1:1041116473120:web:dc4cf722ed24a60e5ad945",
    
    databaseURL:"https://autoimp-default-rtdb.firebaseio.com/"

  };


  // Initialize Firebase

const app = initializeApp(firebaseConfig);

export { app }